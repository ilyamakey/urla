var webpack = require('webpack');
var path = require('path');
var inProduction = (process.env.NODE_ENV === 'production');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: [
      './src/script/app.js',
      './src/style/main.sass',
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    // publicPath: "/build/",
    filename: '[name].js'
  },
  module: {
    rules: [{
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader?url=false", "sass-loader?sourceMap"],
          // publicPath: "/build/"
        })
      }]
  },

  plugins: [
        new ExtractTextPlugin('[name].css')
    ]
};
