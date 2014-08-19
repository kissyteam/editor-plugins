var gulp = require('gulp'),
    rename = require('gulp-rename'),
    gulpKmd = require('gulp-kmd')
    kmc = require('gulp-kmc'),
    packageJson = require('./package.json');

kmc.config({
    depFilePath : './build/mods.js',  
    packages : [
        {
            name : 'kg/editor-plugins/' + packageJson.version + '/lib',
            combine : false,  
            base : './lib'   
        }
    ]
});

gulp.task('kmc', function(cb){
    gulp.src('./lib/**/*.js')
        .pipe(gulpKmd())
        .pipe(kmc.convert({
             fixModuleName:true,
             minify : true,
             ext : {
                src : '-debug.js',
                min : '.js'
             }
        }))
        .pipe(rename(function(path){
            if(path.basename === 'mods' || path.basename === 'mods-debug'){
                path.dirname = '../';
            }
        }))
        .pipe(gulp.dest('./build/lib'));
});

gulp.task('buildCss', function(cb){
    var process = require('child_process');
    process.exec('node node_modules/joycss/bin/joycss assets/editor.less --dest build/assets/editor.css --imgPath ../build/assets',function(){
        process.exec('node node_modules/joycss/bin/joycss assets/iframe.less --dest build/assets/iframe.css');
    });
    
    //本来想调用joycss接口做的，但是生成的iframe.css中部分css规则丢失了。先用上面的方法编译了，到时候 @翰文 修复了bug再配合修改
    // var joycss = require('joycss'),
    //  fs = require('fs'),
    //  path = require('path');
    // var editorLessPath = path.resolve('assets/editor.less'),
    //  destPath = path.resolve('build/assets');
    // fs.readdir('assets',function(err, files){   //把assets文件夹下面的less文件编译（不包括子文件夹里面的less文件）
    //  files.forEach(function(file){
    //      var filePath = path.resolve('assets',file);
    //      if(!fs.statSync(filePath).isDirectory()){
    //          var conf = {
    //              layout : 'auto',
    //              imgPath : '../build/assets',   //这个是目标图片路径相对源less的路径
    //              relative : '.'   //这个是在生成的css文件里面的引用图片相对路径
    //          };
    //          joycss.Mult.add([
    //              filePath, 
    //              {
    //                  global : conf
    //              }, 
    //              null, 
    //              path.resolve(destPath,file.replace('.less','.css'))
    //          ]);
    //      }
    //  });
    //  joycss.Mult.run();
    // });
})

gulp.task('server', function () {
    var app = require('express')();
    var fs = require('fs');
    var path = require('path');
    var serveStatic = require('serve-static');
    var serveIndex = require('serve-index');
    app.use(serveIndex(process.cwd(), {
        hidden: true,
        view: 'details'
    }));
    app.use('/lib/', function (req, res, next) {
        if (req.path.indexOf('-tpl.js') !== -1) {
            next();
            return;
        }
        var filePath = path.resolve(process.cwd(), 'lib', req.path.substring(1));
        var code = fs.readFileSync(filePath, 'utf-8');
        res.set('content-type', 'application/javascript;charset=utf-8');
        res.end('KISSY.add(function(S,require,exports,module){' + code + '});');
    });
    app.use(serveStatic(process.cwd()));
    app.listen(8001);
});

gulp.task('default', ['kmc', 'buildCss']);