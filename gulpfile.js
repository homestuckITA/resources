'use strict';

const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const clean = require('gulp-clean');
const sass = require('gulp-sass');

gulp.task('default', function(){
  return gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('css'));
});

gulp.task('minify-css', function() {
    return gulp.src('css/*.css')
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('sass', function () {
 return gulp.src('./scss/**/*.scss')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('./css'));
});