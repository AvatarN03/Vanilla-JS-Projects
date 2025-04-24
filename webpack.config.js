const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development', // or 'production'
  devServer: {
    static: './dist',
  },
  // plugins: [ // Remove the plugins array
  //   new HtmlWebpackPlugin({
  //     template: './index.html',
  //   }),
  // ],
};