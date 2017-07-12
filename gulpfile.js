var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var sourcemap = require('gulp-sourcemaps');
var cleanCss = require('gulp-clean-css');
var gulpIf = require('gulp-if');
var browserSync = require('browser-sync').create();

var config = {
    path: {
        less: ['./less/main.less', './less/sub/*.less'],
        html: './index.html'
    },
    output: {
        cssName: 'style.css',
        path: './'
    },
    isDevelop: true
};

gulp.task('less', function () {
    return gulp.src(config.path.less)
        .pipe(gulpIf(config.isDevelop, sourcemap.init()))
        .pipe(less())
        .pipe(concat(config.output.cssName))
        .pipe(autoprefixer())
        .pipe(gulpIf(!config.isDevelop, cleanCss()))
        .pipe(gulpIf(config.isDevelop, sourcemap.write()))
        .pipe(gulp.dest(config.output.path))
        .pipe(browserSync.stream())
});

gulp.task('watch', function(){

    gulp.watch(config.path.less, ['less']);
});


gulp.task('default', ['less', 'watch']);
/**
 * Created by Alla on 7/10/2017.
 */
