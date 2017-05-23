const gulp = require("gulp");
const ts = require("gulp-typescript");
const del = require("del");
const tsProject = ts.createProject("tsconfig.json");

gulp.task("clean", () => {
  return del([
    "dist"
  ]);
});


gulp.task("copy-config-files", () => {
    return gulp.src(["package.json", "web.config"])
        .pipe(gulp.dest("dist"));
});

gulp.task("build", ["copy-config-files" ], () => {
    return tsProject.src()
            .pipe(tsProject())
            .js.pipe(gulp.dest("dist"));
});

gulp.task("default", [ "build" ]);