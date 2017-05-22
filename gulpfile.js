var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
// var webpack = require('gulp-webpack');

gulp.task('default', function () {
  return gulp.src('./src/style/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(gulp.dest('./build'));
});

// gulp.task('webpack', function(){
//   return gulp.src('./src/script/app.js')
//     .pipe(webpack({
//       output: {
//         filename: 'app.js'
//       },
//     }))
//     .pipe(gulp.dest('./build'));
// });
