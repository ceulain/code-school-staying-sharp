var gulp = require('gulp'),
plugins = require('load-plugins')(), 
//tous les plugins du package.json
src = './src',
dist = './dist';

gulp.task('css', function(){
    return gulp.src(src + "/assets/css/styles.css");
    // ordonne les propriétés css
	.pipe(plugins.csscomb())
    //beautify le css (identation...)
	.pipe(plugins.cssbeautify())
    //rajoute les prefixes
	.pipe(plugins.autoprefixer())
   	.pipe(gulp.dest(dst + "./assets/css/"))
});


gulp.task('minify_css', function(){
    return gulp.src(dst + '/assets/css/*.css')
	.pipe(plugins.csso())
	.pipe(plugins.rename({
	    suffix: '.min'
	}))
	.pipe(gulp.dest(dst + '/assets/css/'));

});


gulp.task('image', function(){
    return gulp.src(src + '/assets/img/*')
	.pipe(image({}))
	.pipe(gulp.dest(dst + '/assets/img/'))

});

gulp.task('default', ['css', 'minify_css', 'image']);

gulp.task('webserver', function(){
    gulp.src('src')
	.pipe(server({
	    livereload: true,
	    directoryListing: true,
	    open: true
	}));
});
