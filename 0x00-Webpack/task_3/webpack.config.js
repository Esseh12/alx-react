const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    header: path.resolve(__dirname, './modules/header/header.js'),
    body: path.resolve(__dirname, './modules/body/body.js'),
    footer: path.resolve(__dirname, './modules/footer/footer.js'),
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Match CSS files
        use: [
          'style-loader', // Injects CSS into the DOM
          'css-loader',   // Resolves @import and url() like import/require()
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i, // Match image files
        type: 'asset/resource', // Use Webpack 5's asset/resource module
        generator: {
          filename: 'images/[name][ext]', // Output images to the 'images' folder in 'public'
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'image-webpack-loader', // Optimizes images
            options: {
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              disable: false, // Disable optimization in development mode
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js', // Use the entry name for filenames
    clean: true, // Clean the output directory before each build
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html', // Use 'index.html' as a template
    }),
  ],
  devtool: 'inline-source-map',
   optimization: {
    splitChunks: {
      chunks: 'all',  // This will apply code splitting to all chunks
    },
  },
  devServer: {
   contentBase: path.join(__dirname, 'public'),  // Set contentBase to './public'
    port: 8564,// Set port to 8564
  },
  performance: {
    hints: false, // Disable performance hints during development
  },
};
