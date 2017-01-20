var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve', function(){

	browserSync.init({
		server : {
			baseDir : "./"
		}
	});

	gulp.watch('./js/*.js').on("change", browserSync.reload);
	gulp.watch('./**/*.html').on("change", browserSync.reload);
});

gulp.task('default', ['serve']);