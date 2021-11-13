const gulp          = require('gulp'),
    { series }      = require('gulp'),
    autoprefixer    = require('gulp-autoprefixer'),
    compress_images = require('compress-images'),
    cssnano         = require('cssnano'),
    postcss         = require('gulp-postcss'),
    postcssFlexbugs = require('postcss-flexbugs-fixes'),
    run             = require('gulp-run'),
    sass            = require('gulp-sass')

let styles = () => {
    return gulp.src('src/assets/_scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(
            postcss([postcssFlexbugs, autoprefixer, cssnano])
        )
        .pipe(gulp.dest('src/assets/'));
};

let compressImages = async () => {
    await compress_images('src/assets/_raw_images/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}', 'src/assets/images/', {
        compress_force: false,
        statistic: true,
        autoupdate: true,
    }, false,
        { jpg: { engine: 'mozjpeg', command: ['-quality', '60'] } },
        { png: { engine: 'pngquant', command: ['--quality=20-50', '-o'] } },
        { svg: { engine: 'svgo', command: '--multipass' } },
        { gif: { engine: 'giflossy', command: ['--colors', '64', '--use-col=web'] } }, function (err, completed) {
            console.log('Completed image compression');
        });
};

let jsonToScss = () => {
    return run('json-to-scss \'./src/assets/_conf/**/*.json\' ./src/assets/_scss/_variables/', true).exec()
};

let watch = () => {
    gulp.watch( 'src/assets/_conf/**/*.json', jsonToScss );
    gulp.watch( 'src/assets/_raw_images/**/**.*', compressImages );
    gulp.watch( 'src/assets/_scss/**/*.scss', styles );
};

exports.jsonToScss = jsonToScss;
exports.styles = styles;
exports.compreessImages = compressImages;
exports.watch = watch;
exports.build = series(styles, compressImages, jsonToScss);