var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');

var SCRIPTS_DIR = 'js/modules/*.js';

gulp.task('scripts', function() {
  return gulp.src(SCRIPTS_DIR)
    //.pipe(jshint('.jshintrc'))
    //.pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/assets/js'))
    //.pipe(rename({suffix: '.min'}))
    //.pipe(uglify())
    //.pipe(gulp.dest('dist/assets/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('clean', function() {
    return del([
        //'dist/assets/css',
        'dist/assets/js',
        //'dist/assets/img'
    ]);
});

gulp.task('default', ['clean'], function() {
    gulp.start(
        'scripts'
    );
});

gulp.task('watch', function() {

  // Watch .scss files
  //gulp.watch('src/styles/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch(SCRIPTS_DIR, ['scripts']);

  // Watch image files
  //gulp.watch('src/images/**/*', ['images']);

});