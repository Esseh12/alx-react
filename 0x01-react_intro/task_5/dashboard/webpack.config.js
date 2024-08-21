const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Clean the dist folder before each build
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    hot: true,
    open: true, // Open browser automatically
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // Bypass optimization in development
              disable: true, // Disable in development
            },
          },
        ],
      },
    ],
  },
  devtool: 'inline-source-map', // Enable inline source maps
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'dist/index.html'),
      inject: 'body',
    }),
  ],
};
