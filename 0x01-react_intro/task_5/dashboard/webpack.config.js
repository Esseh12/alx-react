const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // or 'production'
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map', // Enable inline source maps
  module: {
    rules: [
      {
        test: /\.css$/, // Apply to .css files
        use: [
          'style-loader', // Injects CSS into the DOM
          'css-loader',   // Resolves CSS imports
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Apply to image files
        use: [
          {
            loader: 'file-loader', // Emits files and returns the URL
            options: {
              name: '[name].[ext]', // Keep the original name and extension
              outputPath: 'images/', // Output to the images folder
            },
          },
          {
            loader: 'image-webpack-loader', // Optimize images
            options: {
              bypassOnDebug: true,
              disable: true, // Set to false to enable optimization
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Clean the output folder before each build
    new HtmlWebpackPlugin({
      template: './src/index.html', // Use 'index.html' as a template
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 8564,
    hot: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',  // This will apply code splitting to all chunks
    },
  },
};
