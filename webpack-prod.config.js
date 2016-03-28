var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // for creating bundle.css

module.exports = {
  devtool: 'source-map',

  entry: [
    './src/js/index'
  ],

  output: {
    path: __dirname + '/bundle/',
    filename: 'bundle.js',
    publicPath: '/bundle/'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
    }),
    new ExtractTextPlugin('bundle.css')
  ],

  resolve: {
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      { test: /\.js$/, loaders: ['jsx?harmony'], exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      { test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, 
            loader: 'file-loader?name=fonts/[name].[ext]' }
    ]
  }
}