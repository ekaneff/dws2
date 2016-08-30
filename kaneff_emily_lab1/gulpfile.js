const gulp = require('gulp');
const babel = require('gulp-babel');
var watch = require('gulp-watch');
var concat = require('gulp-concat');

var jsSources = ['js.main.js'];
 
gulp.task('default', () => {
    return gulp.src('src/app.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('stream', function () {
    // Endless stream mode
    return watch('css/**/*.css', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});

gulp.task('watch-js', function () {
    // Endless stream mode
    return watch('js/**/*.js', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});

gulp.task('callback', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
    return watch('css/**/*.css', function () {
        gulp.src('css/**/*.css')
            .pipe(gulp.dest('css'));
    });
});

gulp.task ('js', function() {
    gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(gulp.dest('js'))
});