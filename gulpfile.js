var gulp = require('gulp'),
    rename = require('gulp-rename'),
    kmc = require('gulp-kmc');

kmc.config({
    depFilePath: './build/mods.js',
    packages: [
        {
            name: 'editor-plugins/lib',
            combine: false,
            base: './lib'
        }
    ]
});

gulp.task('kmc', function (cb) {
    gulp.src('./lib/**/*.js')
        .pipe(kmc.convert({
            fixModuleName: true,
            minify: true,
            ext: {
                src: '-debug.js',
                min: '.js'
            }

        }))
        .pipe(rename(function (path) {
            if (path.basename === 'mods' || path.basename === 'mods-debug') {
                path.dirname = '../';
            }
        }))
        .pipe(gulp.dest('./build/lib'));
});

gulp.task('buildCss', function (cb) {
    var process = require('child_process');
    process.exec('node node_modules/joycss/bin/joycss assets/editor.less --dest build/assets/editor.css --imgPath ../build/assets', function () {
        process.exec('node node_modules/joycss/bin/joycss assets/iframe.less --dest build/assets/iframe.css');
    });
});

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