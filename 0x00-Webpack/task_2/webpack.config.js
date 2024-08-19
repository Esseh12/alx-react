const path = require("path");

module.exports = {
    mode: "production",
    entry: {
     main: path.resolve(__dirname, './js/dashboard_main.js'), 
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader","csss-loader"],
        }
      ],
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
  },
};
