const path = require('path');

module.exports = {
  entry: [
    './src/engine'
  ],
  target: 'web',
  output: {
    library: 'Engine',
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.js.map'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, "src"),
        ]
      }
    ]
  },
  devtool: 'source-map'
};
