var exec       = require('child_process').exec;

var gulp       = require('gulp');

var sass       = require('gulp-ruby-sass');
var minifyCss  = require('gulp-minify-css');
var rename     = require('gulp-rename');
var connect    = require('gulp-connect');
var watch      = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');

var paths = {
  sass:       './_src/scss/**/*.scss',
  templates:  './_src/templates/**/*.pug'
};

gulp.task('watch', function () {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.templates, ['depug']);
});

gulp.task('server', function() {
  connect.server({
    livereload: true,
    port: 3000,
    host: "localhost",
    root: 'web'
  });
});

gulp.task('depug', function (cb) {
  exec('node _compile.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.error(stderr);
    cb(err);
  });
});

gulp.task('livereload', function() {
  gulp.src(['css/*.css', 'js/**/*.js', '**/*.html'])
    .pipe(watch(['css/*.css', 'js/**/*.js', '**/*.html']))
    .pipe(connect.reload());
});

gulp.task('sass', function (done) {
    sass('./_src/scss/main.scss')
    .pipe(gulp.dest('./css/'))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css/'))
    .on('end', done);
});

gulp.task('default', ['sass', 'depug']);
gulp.task('serve', ['sass', 'server', 'livereload', 'watch']);
