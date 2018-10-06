const path = require('path');
const webpack = require('webpack');
const ModuleConcatPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');

module.exports = {
  entry: './js/index.js',
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'index.js'
  },
  mode: 'development',
  node: {
    fs: 'empty'
  },
  plugins: [
    new ModuleConcatPlugin(),
    new webpack.NormalModuleReplacementPlugin(/typeorm$/, function (result) {
      result.request = result.request.replace(/typeorm/, "typeorm/browser");
    })
  ]
};
