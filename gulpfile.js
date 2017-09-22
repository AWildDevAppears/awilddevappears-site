const exec       = require('child_process').exec;

const gulp       = require('gulp');

const sass       = require('gulp-sass');
const minifyCss  = require('gulp-minify-css');
const rename     = require('gulp-rename');
const connect    = require('gulp-connect');
const watch      = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');

const paths = {
  sass:       './_src/scss/**/*.scss',
  templates:  './_src/templates/**/*.pug'
};

gulp.task('watch', () => {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.templates, ['depug']);
});

gulp.task('server', () => {
  connect.server({
    livereload: true,
    port: 3000,
    host: "localhost",
    root: 'web'
  });
});

gulp.task('depug', (cb) => {
  exec('node _compile.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.error(stderr);
    cb(err);
  });
});

gulp.task('livereload', () => {
  gulp.src(['css/*.css', 'js/**/*.js', '**/*.html'])
    .pipe(watch(['css/*.css', 'js/**/*.js', '**/*.html']))
    .pipe(connect.reload());
});

gulp.task('sass', (done) => {
    gulp.src('./_src/scss/main.scss')
    .pipe(sass())
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
