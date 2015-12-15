var gulp = require('gulp'),
autoprefixer = require('autoprefixer'),
cssbeautify = require('cssbeautify'),
csscomb = require('csscomb'),
csso = require('csso'),
server = require('gulp-server-livereload'),
imagemin = require('imagemin'),
rename = require('rename'),
src = './src',
dist = './dist';
console.log("totot");
gulp.task('css', function(){
    return gulp.src(src + "/assets/css/styles.css")
    // ordonne les propriétés css
	.pipe(csscomb())
    //beautify le css (identation...)
	.pipe(cssbeautify())
    //rajoute les prefixes
	.pipe(autoprefixer())
   	.pipe(gulp.dest(dst + "./assets/css/"))
});


gulp.task('minify_css', function(){
    return gulp.src(dst + '/assets/css/*.css')
	.pipe(csso())
	.pipe(rename({
	    suffix: '.min'
	}))
	.pipe(gulp.dest(dst + '/assets/css/'));

});


gulp.task('image', function(){
    return gulp.src(src + '/assets/img/*')
	.pipe(imagemin({}))
	.pipe(gulp.dest(dst + '/assets/img/'))

});

gulp.task('default', ['css', 'minify_css', 'image']);

gulp.task('webserver', function(){
    gulp.src('./src')
	.pipe(server({
	    livereload: true,
	    open: true,
	    defaultFile: 'index.html'
	}));
});
