const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const eslint = require('gulp-eslint')
const webserver = require('gulp-webserver')
const named = require('vinyl-named')
const plumber = require('gulp-plumber')
const path = require('path')

const webpack = require('webpack')
const webpackStream = require('webpack-stream')

const DEBUG = process.env.NODE_ENV == 'develop'
process.traceDeprecation = DEBUG

/** handle stream ending */
function end(done, debug = DEBUG) {
    return function() {
        if (!done.called && debug) {
            done.called = true
            done.call()
        }
    }
}

const babelOptions = {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
}

const webpackOptions = {
    watch: DEBUG,
    devtool: 'eval-source-map',
    output: {
        publicPath: '/js/',
        filename: '[name].js',
        devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]'
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.jsx', '.js', '.json']
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-0'],
                    plugins: ['transform-runtime']
                }
            }]
        }]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
}

gulp.task('dist:default', () => {
    return gulp.src('src/index.js')
        .pipe(babel(babelOptions))
        .pipe(rename('request.js'))
        .pipe(gulp.dest('dist'))
})

gulp.task('dist:minify', () => {
    return gulp.src('src/index.js')
        .pipe(babel(babelOptions))
        .pipe(uglify())
        .pipe(rename('request.min.js'))
        .pipe(gulp.dest('dist'))
})

gulp.task('dist:develop', done => {
    return gulp.src('src/example.js')
        .pipe(named())
        .pipe(plumber())
        .pipe(webpackStream(webpackOptions, webpack))
        .pipe(gulp.dest(path.join('dist', 'js')))
        .on('data', end(done, DEBUG))
})

gulp.task('default', ['dist:develop'], function() {
    return gulp.src('dist')
        .pipe(webserver({
            directoryListing: false,
            open: false
        }))
})

gulp.task('test', () => {
    return gulp.src('src/index.js')
        .pipe(eslint())
        .pipe(eslint.failAfterError())
})
