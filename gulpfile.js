var gulp        = require('gulp'),
    jshint      = require('gulp-jshint'),
    jasmine     = require('gulp-jasmine')
    karma       = require('karma').Server;


gulp.task('default', ['watch']);

gulp.task('test', function(done){
  new karma({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('jshint', function(){
  return gulp.src('source/javascript/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('build-js', function(){
  return gulp.src('source/javascript/**/*.js')
    .pipe(sourcemaps.init())
      .pipe(concat('bundle.js'))
      .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/assets/javascript'));
});

gulp.task('watch', function(){
  gulp.watch('spec/**/*.spec.js', ['test']);
  gulp.watch('source/javascript/**/*.js', ['jshint', 'build-js']);
});
