"use strict"

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      imagemin = require('gulp-imagemin');;


gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('js', function () {
    gulp.src(['src/js/vendors/*.js'])
        .pipe(gulp.dest('./Content/vendors'))

    gulp.src(['src/js/entities/*.js', 'src/js/*.js'])
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./Content'))
        .pipe(connect.reload());
});

gulp.task('img', () =>
	gulp.src('src/img/*')
		.pipe(imagemin())
        .pipe(gulp.dest('images'))
);


gulp.task('watch', function () {
    gulp.watch(['src/scss/**/*.scss'], ['sass']);
});


gulp.task('default', function () {
    gulp.run('watch');
});