/**
 * Created by lcl on 2017/7/28.
 */
import gulpSass from 'gulp-sass';
import gulp from 'gulp';
import path from 'path';
import wiredep from 'wiredep';

let basePath  = path.join(__dirname,"../");

gulp.task('build',['style','html','img'],function(){

});

gulp.task('style',function(){
    let sassOptions = {
        style: 'expanded',
    };
    gulp.src(path.join(basePath,'src/**/*.scss'))
        .pipe(gulpSass(sassOptions))
        .pipe(gulp.dest(path.join(basePath,'dist')));
});

gulp.task('html',function(){
    let wiredepOptions = {
        // Make wiredep dependencies begin with "bower_components/" not "../../...".
        // ignorePath: path.relative(path.join(basePath,"src"), basePath)
    };
    gulp.src(path.join(basePath,'src/**/*.html'))
        .pipe(wiredep.stream(wiredepOptions))
        .pipe(gulp.dest(path.join(basePath,'dist')));
});


gulp.task('img',function(){
    gulp.src(path.join(basePath,'src/**/*.jpg'))
        .pipe(gulp.dest(path.join(basePath,'dist')));
});

gulp.task('watch',['build'],function(){
    gulp.watch(path.join(basePath,'src/**/*.html'),['html']);
    gulp.watch(path.join(basePath,'src/**/*.scss'),['style']);
});