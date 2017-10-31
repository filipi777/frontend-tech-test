module.exports = {
  entry: __dirname + '/react-app/index.js',
  output: {
    path: __dirname + '/react-app/build',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        query: {
          presets: [
            'travix'
          ]
        }
      }
    ]
  },
};
