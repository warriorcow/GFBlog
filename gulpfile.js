var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    rigger = require('gulp-rigger'),
    wait = require('gulp-wait'),
    rename = require('gulp-rename'),
    minifyjs = require('gulp-uglify'),
    minifycss = require('gulp-clean-css');


// Build HTML
gulp.task('html', function(){
  gulp.src('app/*.html')
  .pipe(rigger())
  .pipe(gulp.dest('dist'))
  .pipe(browserSync.reload({stream: true}))
});


// Build CSS
gulp.task('sass', function(){
  gulp.src('app/scss/*.scss')
    .pipe(wait(1000))
    .pipe(sass())
    .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: true}))
    .pipe(minifycss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({stream: true}))
});

// Transfer Fonts
gulp.task('fonts', function() {
    gulp.src('app/fonts/*.*')
    .pipe(gulp.dest('dist/fonts/'))
});


// JS Libs
gulp.task('minlibs', function() {
    gulp.src(['app/js/libs.js'])
    .pipe(rigger())
    .pipe(minifyjs())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js/'))
    .pipe(browserSync.reload({stream: true}));
});


// JS Scripts
gulp.task('minjs', function() {
    gulp.src(['app/js/scripts.js'])
    .pipe(rigger())
    .pipe(minifyjs())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js/'))
    .pipe(browserSync.reload({stream: true}));
});


// Transfer image
gulp.task('compress', function() {
  gulp.src('app/img/*')
  .pipe(gulp.dest('dist/img'))
});


// AutoRefresh
gulp.task('browser-sync', function(){
    browserSync({
      server: {
        baseDir: 'dist',
        index: "index.html"
      },
      notify: false
    });
});



gulp.task('watch', ['browser-sync', 'html', 'minjs', 'minlibs', 'sass', 'compress', 'fonts'], function(){
    gulp.watch('app/scss/*.scss', ['sass', 'html', 'minjs', 'compress']),
    gulp.watch('app/**/*.html', ['sass', 'html', 'minjs', 'compress']),
    gulp.watch('app/js/*.js', ['sass', 'html', 'minjs', 'compress']);
    gulp.watch('node_modules/bootstrap/scss/*.scss', ['sass', 'html', 'minjs', 'compress']);
});
