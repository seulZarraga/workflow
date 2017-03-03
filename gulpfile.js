var gulp = require('gulp'); //npm install --save gulp
var sass =require('gulp-sass'); //npm install --save gulp-sass
var browserSync = require('browser-sync'); //npm install --save browser-sync
var reload = browserSync.reload; //a property of browser sync
var autoprefixer = require('gulp-autoprefixer') //npm install --save gulp-autoprefixer

gulp.task('sass', function(){
	gulp.src('scss/app.scss') //source
	.pipe(autoprefixer())
	.pipe(sass({
		includePaths: ['scss']
	}))
	.pipe(gulp.dest('app/css')); //destination
});

gulp.task('serve', ['sass'], function(){
	browserSync.init(['app/css/*.css', 'app/js/*.js', 'app/*.html'], {
		server: {
			baseDir: 'app'
		}
	})
}); // task which detect every change in the files with these extensions

gulp.task('watch',['sass', 'serve'], function() {
	gulp.watch(['scss/*.scss'], ['sass'])
}); // this watchs changes in the scss folder it needs to run sass task first

gulp.task('default', ['watch']);