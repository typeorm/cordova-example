const path = require('path');

module.exports = {
  entry: './js/index.js',
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'index.js'
  },
  mode: 'development',
  node: {
    fs: 'empty'
  }
};
