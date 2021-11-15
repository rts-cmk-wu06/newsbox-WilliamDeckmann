// Variables
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const babel = require("gulp-babel");



// Styles
function buildStyles() {
  return src('assets/src/sass/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' })) // compressed & expanded
    .pipe(dest('assets/dist/css'))
};

// javascript
function buildJavascript() {
  return src("assets/src/js/*.js")
    .pipe(babel({
      presets: ["@babel/preset-env"]
    }))
    .pipe(dest("assets/dist/js"));
};

// Watch
function watchTask() {
  watch(['*.html', 'assets/src/sass/**/*.scss', 'assets/src/js/*.js'], series(buildStyles, buildJavascript))
};

// Export
exports.default = series(buildStyles, buildJavascript, watchTask)