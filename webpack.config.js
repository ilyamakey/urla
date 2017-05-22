var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/script/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  }
};
