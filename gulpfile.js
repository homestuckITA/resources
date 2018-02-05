'use strict';

const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function(){
  return gulp.src('style/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({level: 2}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('production/style'));
});