module.exports = function(gulp, plugins, consts) {
  return function() {
    const sassFilesSrc = plugins.path.join(consts.DOCS, '_sass', 'main.scss');
    const cssFilesDest = plugins.path.join(
      consts.VERSIONED_DIST,
      'docs',
      'css'
    );

    return gulp
      .src(sassFilesSrc)
      .pipe(
        plugins
          .sass({outputStyle: 'compressed'})
          .on('error', plugins.sass.logError)
      )
      .pipe(
        plugins.autoprefixer({
          browsers: ['last 2 versions', 'ie 8', 'ie 9'],
          cascade: false,
        })
      )
      .pipe(plugins.rename('main.css'))
      .pipe(gulp.dest(cssFilesDest));
  };
};
