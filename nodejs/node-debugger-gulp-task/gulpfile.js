/**
 * Created by luchu on 2017/7/1.
 */
var path = require("path");
var gulp = require("gulp");
const basePath = __dirname;

gulp.task("movefiles",function(){
    debugger;
    gulp.src(path.join(basePath,"src/**/*.html"))
        .pipe(gulp.dest(path.join(basePath,"dist")));
})