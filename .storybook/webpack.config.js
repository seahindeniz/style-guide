const path = require('path');

const SRC_PATH = path.resolve(__dirname, '../src');
const STORYBOOK_PATH = path.resolve(__dirname);

module.exports = ({ config, mode }) => {
  const rules = config.module.rules.filter(
    // We want to storybook to handle all the files except for .css and .svg
    rule => !rule.test.test('.css') && !rule.test.test('.svg')
  );
  const customRules = [
    { test:
      /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
     loader:
      'file-loader',
     query: { name: 'static/media/[name].[hash:8].[ext]' } },
    {
      test: /\.svg$/,
      loader: 'svg-sprite-loader',
      // options: {
      //   symbolId: filePath => path.basename(filePath)
      // }
    },{
    test: /\.scss$/,
    resolve: {
      extensions: ['.scss', '.sass'],
    },
    use: ['style-loader', 'css-loader', {
      loader: 'sass-loader',
      options: {
        includePaths: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../', 'node_modules')]
      }
    }],
    include: path.resolve(__dirname, '../'),
  }];

  // Return the altered config
  return {
    ...config,
    module: {
      ...config.module,
      rules: [...rules, ...customRules]
    }
  };};
