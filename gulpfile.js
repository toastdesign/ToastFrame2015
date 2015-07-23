var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() {
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('minjs'));
});