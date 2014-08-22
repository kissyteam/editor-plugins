var path = require('path'),
	mkdirp = require('mkdirp'),
	less = require('less'),
    gutil = require('gulp-util'),
	through2 = require('through2'),
	joycss = require('joycss'),
	PluginError = gutil.PluginError;

const PLUGIN_NAME = 'gulp-joycss';


var cwd = process.cwd();
function gulpJoycss(options){
	var stream = through2.obj(function(file, enc, cb){
		if(file.isNull()){
			return cb();
		}
		if(file.isStream()){
			this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
      		return cb();
		}

		var self = this;
        var layout = options.layout || 'auto';

        if(options[path.basename(file.path)].imgPath){
        	var fileOptions = options[path.basename(file.path)];
        	var	prefixUrl = fileOptions.prefixUrl,
        	dest = path.resolve(cwd, fileOptions.dest),
        	imgPath = path.relative(path.dirname(file.path),path.resolve(cwd,fileOptions.imgPath)),  // 图片位置: 图片位置是源css位置与图片目标位置的相对值
			relative = path.relative(path.dirname(dest), path.resolve(cwd,fileOptions.imgPath)) || '.';
		
			mkdirp.sync(path.dirname(dest));  //由于joycss存在不能创建目标目录的bug，这里fix
			var conf = {
	            layout : layout,
	            imgPath : imgPath,
	            relative : relative
	        };
			joycss.Mult.add([
	            file.path,
	            {
	                global : conf
	            },
	            null,
	            dest
	        ]);
	        joycss.Mult.run();
		    joycss.Event.on('mult:end', function(data){
		      var imgPathInCssText = relative + '/' + path.basename(data.file, '.css') + '-sprite.png',
		      	  imgPathInCssText8 = relative + '/' + path.basename(data.file, '.css') + '-sprite8.png',
		      	  miniPathInCssText = prefixUrl + '/' + path.basename(data.file, '.css') + '-sprite.png',
		      	  miniPathInCssText8 = prefixUrl + '/' + path.basename(data.file, '.css') + '-sprite8.png';
		      var miniFile = new gutil.File({
		      		contents : new Buffer(data.cssText.replace(imgPathInCssText, miniPathInCssText).replace(imgPathInCssText8, miniPathInCssText8).replace(/\n/g,'')),
		      		base : path.dirname(data.file),
		      		path : data.file
		      });

		      var debugFile = new gutil.File({
		      		contents : new Buffer(data.cssText),
		      		base : path.dirname(data.file),
		      		path : path.normalize(path.dirname(data.file) + '/' + path.basename(data.file, '.css') + '-debug.css')
		      });
		      self.push(miniFile);
		      self.push(debugFile);
		      return cb();
		    });
        }else{
        	less.render(file.contents.toString(), function(e, css){

        		var debugFile = new gutil.File({
        			contents : new Buffer(css),
        			base : file.base,
        			path : path.normalize(path.dirname(file.path) + '/' + path.basename(file.path, '.less') + '-debug.css')
        		});
        		var miniFile = new gutil.File({
        			contents : new Buffer(css.replace(/\n/g, '')),
        			base : file.base,
        			path : file.path.replace('.less','.css')
        		});
        		self.push(miniFile);
        		self.push(debugFile);
        		return cb();
        	})
        }
        
	});
	return stream;
}

module.exports = gulpJoycss;