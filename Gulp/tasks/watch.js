var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require("browser-sync").create();



gulp.task('watch',function(){

	console.log("Opening website...");
	
	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	}
	);
	/*first is file on the PC , which we want to watch, the second is what we want it to do */
	watch('./app/index.html', function(){

		browserSync.reload();



	});

	watch('./app/assets/styles/**/*.css', function(){

		gulp.start('cssInject');
	});




});

gulp.task('cssInject', ['styles'],  function(){

   return gulp.src('./app/temp/styles/styles.css')
   .pipe(browserSync.stream());


});
