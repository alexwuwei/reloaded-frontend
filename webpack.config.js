'use strict';

const path = require('path');

const PATHS = {
  dev: path.join(__dirname, 'dev/app'),
  devSass: path.join(__dirname, 'dev/app/sass'),
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
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.dev
      }
    ]
  }
}
