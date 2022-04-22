const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const rollup = require('rollup');
const rollupTypescript = require('@rollup/plugin-typescript');
const { terser } = require('rollup-plugin-terser');
const stripBanner = require('rollup-plugin-strip-banner');

const scssFiles = 'src/scss/**/*.scss';
const cssDest = 'dist/css/';
const tsSource = 'src/ts/index.ts';
const jsDest = {
	'js-es5': './dist/sintroduce.js',
	'js-es6': './dist/sintroduce.esm.js'
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

gulp.task('js-es5', function (done) {
	return rollup
    .rollup({
      input: tsSource,
      plugins: [
				rollupTypescript({ compilerOptions: { target: 'es5' }}),
				stripBanner(),
			]
    })
    .then(bundle => {
      return bundle.write({
        file: jsDest["js-es5"],
        format: 'umd',
        name: bundleName,
				plugins: [
					terser()
				],
        sourcemap: true,
				banner: banner
      });
    });
});

gulp.task('js-es6', function (done) {
	return rollup
    .rollup({
      input: tsSource,
      plugins: [
				stripBanner(),
				rollupTypescript({ compilerOptions: { target: 'es6' }})
			]
    })
    .then(bundle => {
      return bundle.write({
        file: jsDest["js-es6"],
        format: 'es',
        name: bundleName,
				plugins: [
					terser()
				],
        sourcemap: true,
				banner: banner
      });
    });
});

gulp.task('build', gulp.parallel('scss', 'js-es5', 'js-es6'));
