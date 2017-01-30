'use strict';

const path = require('path');

const PATHS = {
  dev: path.join(__dirname, 'dev/app'),
  public: path.join(__dirname, 'public/js')
};

module.exports = {
  entry: {
    dev: PATHS.dev
  },
  output : {
    path: PATHS.public,
    filename: 'bundle.js'
  }
}
