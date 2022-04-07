const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const typescript = require('gulp-typescript');

const tsProject = typescript.createProject("tsconfig.json");

const scssFiles = 'src/scss/**/*.scss';
const cssDest = 'dist/css/';
const jsDest = 'dist/js/';

gulp.task('scss', function (ac) {
	gulp.src(scssFiles)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(cssDest));

	ac();
});

gulp.task('ts', function (ac) {
	return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest(jsDest));
})

exports.build = gulp.parallel('scss', 'ts');
