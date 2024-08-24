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
    static: {
      directory: path.join(__dirname, 'public'), // Use 'static' instead of 'contentBase'
    },
    port: 8564, // Set the port
    hot: true, // Enable hot reloading
  },
   stats: {
    children: true, // Enable stats for child compilations
  },
};
