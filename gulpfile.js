require('./gulp/tasks/styles');
require('./gulp/tasks/watch');

var gulp = require('gulp');

gulp.task('default', function(){

	console.log(">>>>>>>>>>>>>>>>GULP IS ONLINE<<<<<<<<<<<<<<<<<<<<");

});

gulp.task('html',function(){


	console.log("A change in the html file was performed");

});

