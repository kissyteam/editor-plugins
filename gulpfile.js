var gulp = require('gulp'),
	rename = require('gulp-rename'),
	kmc = require('gulp-kmc');


kmc.config({
	depFilePath : './build/mods.js',  
	packages : [
		{
			name : 'editor-plugins/lib',
			combine : false,  
			base : './lib'   
		}
	]
});

gulp.task('kmc', function(cb){
	gulp.src('./lib/**/*.js')
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
	// 	fs = require('fs'),
	// 	path = require('path');
	// var editorLessPath = path.resolve('assets/editor.less'),
	// 	destPath = path.resolve('build/assets');
	// fs.readdir('assets',function(err, files){   //把assets文件夹下面的less文件编译（不包括子文件夹里面的less文件）
	// 	files.forEach(function(file){
	// 		var filePath = path.resolve('assets',file);
	// 		if(!fs.statSync(filePath).isDirectory()){
	// 			var conf = {
	// 				layout : 'auto',
	// 				imgPath : '../build/assets',   //这个是目标图片路径相对源less的路径
	// 				relative : '.'   //这个是在生成的css文件里面的引用图片相对路径
	// 			};
	// 			joycss.Mult.add([
	// 				filePath, 
	// 				{
	// 					global : conf
	// 				}, 
	// 				null, 
	// 				path.resolve(destPath,file.replace('.less','.css'))
	// 			]);
	// 		}
	// 	});
	// 	joycss.Mult.run();
	// });
})

gulp.task('default', ['kmc', 'buildCss']);