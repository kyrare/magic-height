'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');


gulp.task('js:build', function () {
    gulp.src('src/*.js')
        .pipe(gulp.dest('dist/'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/'));
});

gulp.task('build', ['js:build']);

gulp.task('watch', function () {
    watch(['src/*.js'], function (event, cb) {
        gulp.start('js:build');
    });
});

gulp.task('default', ['build', 'watch']);