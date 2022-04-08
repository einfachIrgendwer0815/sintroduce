const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const typescript = require('gulp-typescript');

const browserSync = require('browser-sync');
const reload = browserSync.reload;

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

gulp.task('build', gulp.parallel('scss', 'ts'));

gulp.task('reload', function (ac) {
	reload({ stream: true });
	ac();
});

gulp.task('test', gulp.series('scss', 'ts', function (ac) {
	browserSync({
		server: {
			baseDir: 'test'
		}
	});

	gulp.watch('src/scss/**/*.scss', gulp.series('scss', 'reload'));
	gulp.watch('src/ts/**/*.ts', gulp.series('ts', 'reload'));
	gulp.watch('test/**/*.html', gulp.series('reload'));
}));
