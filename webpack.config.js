const path = require('path');
module.exports = {
  entry: './client/index.jsx',
  mode: "development",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), //this is the folder you want to save your bundle in
  },

 module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      { test: /\.(png|woff|woff2|eot|}ttf|svg)$/,
        use: [{ loader: 'url-loader', options: { limit: 100000 } }]
      },
    ]
  }
};