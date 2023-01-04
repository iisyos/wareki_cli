import gulp from 'gulp';
import typescript from 'gulp-typescript';

gulp.task('compile:ts', gulp.series(function () {
  return gulp.src(['src/ts/*.ts'])
    .pipe(typescript())
    .js
    .pipe(gulp.dest('dist/js/'));
}));


gulp.task('watch', function () {
  gulp.watch([
    'src/ts/*.ts'
  ], gulp.task('compile:ts'));
});

gulp.task('default', gulp.series(gulp.parallel('compile:ts', 'watch')));
