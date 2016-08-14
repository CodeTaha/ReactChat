var gulp = require("gulp");
var $ = require("gulp-load-plugins")({lazy:true});
var browserify = require('browserify'),
	reactify = require('reactify'),
	source = require('vinyl-source-stream');

var config = {
	port: 7001,
	devBaseUrl: 'http://localhost',
	paths:{
		html: './src/*.html',
		js: './src/**/*.js*',
		images: [
			'./src/images/**',
			//'./src/images/chatData/**.**'
			],
		dist: './dist',
		mainJs: './src/main.jsx',
		css:[
			'node_modules/bootstrap/dist/css/bootstrap.css',
			'node_modules/bootstrap/dist/css/bootstrap-theme.css',
			'node_modules/toastr/build/toastr.css',
			'src/css/**.css'
		],
		fonts:[
			'node_modules/bootstrap/fonts/**'
		]
	}
}

// Start a local development Server
gulp.task('connect', function() {
	$.connect.server({
		root: 'dist',
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

gulp.task('open',['connect'], function(){
	gulp.src('dist/index.html')
		.pipe($.open({
			uri: config.devBaseUrl + ":" + config.port + "/"
		}))
});

gulp.task('html', function(){
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe($.connect.reload());
});

gulp.task('images', function(){
	gulp.src(config.paths.images)
		.pipe(gulp.dest(config.paths.dist + "/images"))
		.pipe($.connect.reload());

	gulp.src('./src/images/favicon.ico')
		.pipe(gulp.dest(config.paths.dist));
})

gulp.task('js',['lint'], function() {
	browserify(config.paths.mainJs)
		.transform(reactify)
		.bundle()
		.pipe($.plumber())
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe($.connect.reload());

});

gulp.task('lint', function(){
	gulp.src(config.paths.js)
		.pipe($.eslint({configFile: 'eslint.config.json'}))
		.pipe($.eslint.format());
});

gulp.task('css', function(){
	return gulp.src(config.paths.css)
		.pipe($.concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'))
});

gulp.task('fonts', function(){
	return gulp.src(config.paths.fonts)
		.pipe(gulp.dest(config.paths.dist + '/fonts'))
});

gulp.task('watch', function(){
	gulp.watch(config.paths.html,['html']);
	gulp.watch(config.paths.js,['js']);
});

gulp.task('default',['html','js','css', 'fonts', 'lint','open', 'watch']);