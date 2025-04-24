const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development', // or 'production' depending on your needs
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // This now correctly points to index.html in the root
      filename: 'index.html',   // This ensures the output index.html is also named index.html in the dist folder
    }),
  ],
};