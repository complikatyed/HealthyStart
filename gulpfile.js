var gulp      = require('gulp');
var concat    = require('gulp-concat');
var sass      = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename    = require('gulp-rename');

var paths = {
  sass: ['./styles/*.scss']
};

gulp.task('default', ['sass', 'watch']);

gulp.task('sass', function(done) {
  gulp.src(paths.sass)
    .pipe(sass())
    .pipe(gulp.dest('./styles/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./styles/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});
