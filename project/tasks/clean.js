import gulp from "gulp";
import del from "del" ;
import args from  "./utils/args.js";

gulp.task("clean",(cb) => {
  return del(["server/public","server/view"]);
});
