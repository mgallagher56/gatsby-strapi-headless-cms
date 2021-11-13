const gulp              = require('gulp'),
      { series }        = require('gulp'),
      autoprefixer      = require('gulp-autoprefixer'),
      compress_images   = require('compress-images'),
      cssnano           = require('cssnano'),
      del               = require("del"),
      extractMediaQuery = require('postcss-extract-media-query'),
      postcss           = require('gulp-postcss'),
      postcssFlexbugs   = require('postcss-flexbugs-fixes'),
      postcssMergeMedia = require("postcss-combine-media-query"),
      purgecss          = require('gulp-purgecss'),
      run               = require('gulp-run'),
      sass              = require('gulp-sass')(require('sass'));

const styles = () => {
    return gulp.src('src/assets/styles/_scss/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(
            postcss([ postcssFlexbugs, autoprefixer ])
        )
        .pipe(gulp.dest('src/assets/styles/_compiledCSS/'));
};

const cleanStyles = () => {
    return del(["src/assets/styles/_compiledCSS/**"]);
};

const purgeStyles = () => {
    return gulp
        .src("src/assets/styles/_compiledCSS/*.css")
        .pipe(
            purgecss({
                content: [
                    "src/**/*.js",
                    "src/**/*.jsx",
                ],
                keyframes: true,
            })
        )
        .pipe(gulp.dest('src/assets/styles/_compiledCSS/purged/'));
};

const alignMediaQueries = () => {
    return gulp
    .src("src/assets/styles/_compiledCSS/purged/*.css")
    .pipe( postcss([postcssMergeMedia]) )
    .pipe(gulp.dest("src/assets/styles/_compiledCSS/split/"));
}

const extractMediaQueries = () => {

    const extractMediaQueryOptions = {
        queries: {
            "(min-width: 576px)"  : "sm",
            "(min-width: 768px)"  : "md",
            "(min-width: 992px)"  : "lg",
            "(min-width: 1200px)" : "xl"
        },
        output: {
            path: "src/assets/styles/_compiledCSS/split/",
        },
        extractAll: false,
        stats:  true,
    }

    return gulp
    .src("src/assets/styles/_compiledCSS/split/*.css")
    .pipe(
        postcss([extractMediaQuery(extractMediaQueryOptions)]),
    )
    .pipe(gulp.dest("src/assets/styles/_compiledCSS/split/"));
}

const minifyStyles = () => {
    return gulp
    .src("src/assets/styles/_compiledCSS/split/*.css")
    .pipe( postcss([cssnano]) )
    .pipe(gulp.dest("src/assets/styles/"));
}

const compressImages = async () => {
    await compress_images('src/assets/images/_raw_images/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}', 'src/assets/images/', {
        compress_force: false,
        statistic: true,
        autoupdate: true,
    }, false,
        { jpg: { engine: 'mozjpeg', command: [ '-quality', '60' ] } },
        { png: { engine: 'pngquant', command: [ '--quality=20-50', '-o' ] } },
        { svg: { engine: 'svgo', command: '--multipass' } },
        { gif: { engine: 'giflossy', command: [ '--colors', '64', '--use-col=web' ] } }, function (err, compconsted) {
            console.log('Compconsted image compression');
        });
};

const jsonToScss = () => {
    return run('json-to-scss \'./src/assets/_conf/**/*.json\' ./src/assets/styles/_scss/_variables/', true).exec()
};

const watch = () => {
    gulp.watch('src/assets/_conf/**/*.json', jsonToScss);
    gulp.watch('src/assets/images/_raw_images/**/**.*', compressImages);
    gulp.watch('src/assets/styles/_scss/**/*.scss', sequenceStyles);
};

const splitStyles = gulp.series(alignMediaQueries, extractMediaQueries, minifyStyles);
const sequenceStyles = gulp.series(cleanStyles, styles, purgeStyles, splitStyles);

exports.jsonToScss      = jsonToScss;
exports.cleanStyles     = cleanStyles;
exports.compreessImages = compressImages;
exports.styles          = sequenceStyles;
exports.watch           = watch;
exports.build           = series(sequenceStyles, compressImages, jsonToScss);
