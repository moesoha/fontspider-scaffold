const { src, dest, series } = require('gulp');
const gulpFontSpider = require('gulp-font-spider');
const clean = require('gulp-clean');

const cleanUpPreviousBuild = () => src('./dist', { read: false }).pipe(clean());
const cleanUpOriginalFonts = () => src('./dist/**/.font-spider', { read: false }).pipe(clean());
const copyFiles = () => src('./src/**').pipe(dest('./dist/'));
const fontSpider = () => src('./dist/*.html')
	.pipe(gulpFontSpider())
	.pipe(dest('./dist/'))
;

exports.default = series(
	cleanUpPreviousBuild,
	copyFiles,
	fontSpider,
	cleanUpOriginalFonts
)

exports.clean = cleanUpPreviousBuild
