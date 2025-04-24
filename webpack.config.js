const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // If you're importing CSS in JS

module.exports = {
  mode: 'development', // Or 'production' for your final build
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // If importing CSS in JS
      },
      // ... other rules ...
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'home.css', // Or your desired CSS filename
    }),
   
  ],
};