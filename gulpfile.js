const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const rollup = require('rollup');
const rollupTypescript = require('@rollup/plugin-typescript');
const { terser } = require('rollup-plugin-terser');

const scssFiles = 'src/scss/**/*.scss';
const cssDest = 'dist/css/';
const tsSource = 'src/ts/index.ts';
const jsDest = {
	'js-es5': './dist/sintroduce.js',
	'js-es6': './dist/sintroduce.esm.js'
};

const bundleName = "Sintroduce";

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
      plugins: [rollupTypescript()]
    })
    .then(bundle => {
      return bundle.write({
        file: jsDest["js-es5"],
        format: 'umd',
        name: bundleName,
				plugins: [
					terser()
				],
        sourcemap: true
      });
    });
});

gulp.task('js-es6', function (done) {
	return rollup
    .rollup({
      input: tsSource,
      plugins: [rollupTypescript()]
    })
    .then(bundle => {
      return bundle.write({
        file: jsDest["js-es6"],
        format: 'es',
        name: bundleName,
				plugins: [
					terser()
				],
        sourcemap: true
      });
    });
});

gulp.task('build', gulp.parallel('scss', 'js-es5', 'js-es6'));
