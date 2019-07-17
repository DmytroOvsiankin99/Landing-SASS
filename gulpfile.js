const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require ('gulp-autoprefixer');
const sourcemaps = require ('gulp-sourcemaps');
const browser_sync = require ('browser-sync').create();

function scss_css(done){
    gulp.src('./sass/**/*.scss')
    .pipe( sourcemaps.init())
    .pipe( sass({
        errorLogToConsole: true, 
        outputStyle: "compressed"
    }))
    .on('error', console.error.bind(console))
    .pipe( autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(rename({suffix:'.min'}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css/'))
    .pipe(browser_sync.stream());
    done();
}
// function sync(done){
//     browser_sync.init({
//         server: {
//             baseDir: "./"
//         },
//         port: 3000
//     });
//     done();
// }
function reload(done){
    browser_sync.reload();
    done();
}
function watchFiles(){
    gulp.watch("./sass/**/*", scss_css);
    gulp.watch("./**/*.html", reload);
    gulp.watch("./**/*.js", reload);
    gulp.watch("./**/*.php", reload);
}
gulp.task('default', gulp.parallel(watchFiles));