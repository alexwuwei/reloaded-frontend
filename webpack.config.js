'use strict';

const path = require('path');

const PATHS = {
  dev: path.join(__dirname, 'dev/app'),
  devSass: path.join(__dirname, 'dev/sass'),
  public: path.join(__dirname, 'public/js')
};

module.exports = {
  entry: {
    dev: PATHS.dev
  },
  output : {
    path: PATHS.public,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass?sourceMap'],
        include: PATHS.devSass
      }]
  }
};
