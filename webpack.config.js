var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // for creating bundle.css

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/js/index'
  ],
  output: {
    path: __dirname + '/bundle/',
    filename: 'bundle.js',
    publicPath: '/bundle/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.NewWatchingPlugin(),
    new ExtractTextPlugin('bundle.css')
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'jsx?harmony'], exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      { test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, 
            loader: 'file-loader?name=fonts/[name].[ext]' }
    ]
  }
};
