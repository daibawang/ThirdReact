import gulp from "gulp";
import gulpif from "gulp-if";
import gutil from "gulp-util";
import args from  "./utils/args.js";

gulp.task("browser",(cb) => {
  if (!args.watch) {
    return cb();
  }
  gulp.watch("app/**/*.js",["scripts"]);
  gulp.watch("app/**/*.ejs",["pages"]);
  gulp.watch("app/**/*.css",["css"]);
  gulp.watch("app/**/*.scss",["css"]);
});
