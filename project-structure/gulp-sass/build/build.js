/**
 * Created by lcl on 2017/7/28.
 */
import gulpSass from 'gulp-sass';
import gulp from 'gulp';
import path from 'path';

let basePath  = path.join(__dirname,"../");

gulp.task('build',['style','html'],function(){

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
    gulp.src(path.join(basePath,'src/**/*.html'))
        .pipe(gulp.dest(path.join(basePath,'dist')));
});

gulp.task('watch',['build'],function(){
    gulp.watch(path.join(basePath,'src/**/*.html'),['html']);
    gulp.watch(path.join(basePath,'src/**/*.scss'),['style']);
});