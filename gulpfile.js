var gulp = require('gulp');
var uglify = require('gulp-uglify');
var obfuscate = require('gulp-obfuscate');

var rutas = {
	js: './src/assets/js/miGranJs.js'
};

gulp.task('prueba', function(){
	gulp.src(rutas.js)
	.pipe(uglify())
	.pipe(obfuscate())
	.pipe(gulp.dest('public'))
});