var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import'),
mixins = require('postcss-mixins');


/*first variable shows how the task should be named,second defines what we want to happen */
gulp.task('styles',function(){

    console.log("A change in styles.css file was performed");

	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssimport,mixins, cssvars,nested, autoprefixer]))
	.on('error', function(errorInfo){ 	 /*first argument shows the name of the event, in which we are interested in*/
     console.log(errorInfo.toString());
     this.emit('end');

	})  
	.pipe(gulp.dest('./app/temp/styles'));
    
});


