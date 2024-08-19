const path = require("path");

const config = {
  entry: "./js/dashboard_main.js",
  mode: "production",
    output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "public")
  },
  plugins: []
};

module.exports = config;