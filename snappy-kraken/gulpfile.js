const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sassify', () => {
    gulp.src('./styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./styles/'))
})

gulp.task('run', ['sassify'])

gulp.task('watch', () => {
    gulp.watch('./styles/main.scss', ['sassify'])
})

gulp.task('default', ['run', 'watch'])