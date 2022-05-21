const gulp = require('gulp');

const sass = require('gulp-sass')(require('sass'));

const rollup = require('rollup');
const rollupTypescript = require('@rollup/plugin-typescript');
const { terser } = require('rollup-plugin-terser');
const stripBanner = require('rollup-plugin-strip-banner');

const scssFiles = 'src/scss/**/*.scss';
const cssDest = 'dist/css/';
const tsSource = 'src/ts/index.ts';
const tsDevSource = 'src/ts/index.dev.ts';
const jsDest = {
	'js-es5': './dist/sintroduce.js',
	'js-es5-dev': './dist/sintroduce.dev.js',
	'js-es6': './dist/sintroduce.esm.js',
	'js-es6-dev': './dist/sintroduce.esm.dev.js'
};

const bundleName = "Sintroduce";

const banner = `/*!
* MIT licensed
*
* Copyright (C) 2022 einfachIrgendwer0815
*/\n`

gulp.task('scss', function (done) {
	gulp.src(scssFiles)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(cssDest));

	done();
});

var cache = {};

function js_es5(dev = false) {
	return rollup
    .rollup({
      input: dev ? tsDevSource: tsSource,
			cache: cache.umd,
      plugins: [
				rollupTypescript({ compilerOptions: { target: 'es5' }}),
				stripBanner(),
			]
    })
    .then(bundle => {
			cache.umd = bundle.cache;
      return bundle.write({
        file: dev ? jsDest["js-es5-dev"]: jsDest["js-es5"],
        format: 'umd',
        name: bundleName,
				plugins: [
					terser()
				],
        sourcemap: true,
				banner: banner
    	});
    });
}

gulp.task('js-es5', function (done) {
	return js_es5(false);
});

gulp.task('js-es5-dev', function (done) {
	return js_es5(true);
});

function js_es6(dev = false) {
	return rollup
    .rollup({
      input: dev ? tsDevSource: tsSource,
			cache: cache.esm,
      plugins: [
				stripBanner(),
				rollupTypescript({ compilerOptions: { target: 'es6' }})
			]
    })
    .then(bundle => {
			cache.esm = bundle.cache;
      return bundle.write({
        file: dev ? jsDest["js-es6-dev"]: jsDest["js-es6"],
        format: 'es',
        name: bundleName,
				plugins: [
					terser()
				],
        sourcemap: true,
				banner: banner
      });
    });
}

gulp.task('js-es6', function (done) {
	return js_es6(false);
});

gulp.task('js-es6-dev', function (done) {
	return js_es6(true);
});

gulp.task('serve', function (done) {
	gulp.watch(['src/**/*'], gulp.parallel('js-dev', 'scss'));
});

gulp.task('js', gulp.parallel('js-es5', 'js-es6'));
gulp.task('js-dev', gulp.parallel('js-es5-dev', 'js-es6-dev'));
gulp.task('build', gulp.parallel('scss', 'js'));
gulp.task('fullbuild', gulp.parallel('scss', 'js', 'js-dev'));
