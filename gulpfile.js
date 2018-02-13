var gulp = require('gulp');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var less = require('gulp-less');
var tsProject = ts.createProject('./tsconfig.json');
var connect = require('gulp-connect');
/*
compile typescript
use ES5 and commonJS module
*/
gulp.task('typescript', function() {
	/* 
	 old version
	 var tsResult = tsProject.src().pipe(ts(tsProject));
	 changed for
	*/
	tsResult = tsProject.src().pipe(tsProject());
	return tsResult.js.pipe(gulp.dest('dist/js'));
});
/*
Web server to test app
*/
gulp.task('webserver', function() {
	connect.server({
		livereload: true,
		root: ['.', 'dist']
	});
});
/*
Automatic Live Reload
*/
gulp.task('livereload', function() {

	gulp.src(['dist/styles/*.css', 'dist/js/*.js'])
		.pipe(watch(['dist/styles/*.css', 'dist/js/*.js']))
		.pipe(connect.reload());
});
/*
copy all html files and assets
*/
gulp.task('copy', function() {

	gulp.src('src/assets/**/*.*').pipe(gulp.dest('dist/assets'));
});
/*
compile less files
*/
gulp.task('less', function() {

	gulp.src('styles/*.less')
		.pipe(less())
		.pipe(gulp.dest('dist/styles'));
});
/*
browserify
now is only for Javascript files
*/
gulp.task('browserify', function() {

	browserify('./dist/js/main.js').bundle().pipe(source('main.js')).pipe(gulp.dest('dist/js'));
});
/*
Watch typescript and less
*/
gulp.task('watch', function() {

	gulp.watch('styles/*.less', ['less']);
	gulp.watch('scripts/*.ts', ['typescript', 'browserify']);
});
/*
default task
*/
gulp.task('default', ['less', 'typescript', 'browserify', 'copy', 'webserver', 'livereload', 'watch']);