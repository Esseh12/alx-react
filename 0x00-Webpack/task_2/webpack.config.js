const path = require("path");

module.exports = {
    mode: "production",
    entry: {
     main: path.resolve(__dirname, './js/dashboard_main.js'), 
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)/$i,
        type: 'asset/resource',
      }
    ]
  },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
  },
};
