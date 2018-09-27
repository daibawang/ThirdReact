import gulp from "gulp";
import gulpif from "gulp-if";
import sass from"gulp-sass";
import livereload from "gulp-livereload";
import args from  "./utils/args.js";

gulp.task("css",() => {
  return gulp.src(["app/**/*.css","app/**/*.scss"])
    .pipe(sass({outputStyle:'expanded'}))
    .pipe(gulp.dest("server/public"))
    
    .pipe(gulpif(args.watch,livereload()))
});
