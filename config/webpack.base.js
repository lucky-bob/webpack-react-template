const path = require("path");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "../src/index.js"),
  },
  output: {
    filename: "[name].[chunkhash:8].js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [],
};
