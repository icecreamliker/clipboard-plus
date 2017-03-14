module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: './',
    filename: '[name].js',
    library: 'copy',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }
    }]
  }
};
