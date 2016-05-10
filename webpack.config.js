'use strict';

const webpack = require('webpack');

let entry = require('fs').readdirSync('./build')
  .filter(x => /\.js/.test(x))
  .reduce((base, slacker) => {
    base['slackers_' + slacker.replace(/\.[^\.]+$/, '')] = './build/' + slacker;
    return base;
  }, {});

if (!Object.keys(entry).length) {
  console.log("No icons were found");
  process.exit(1);
}

entry.slackers_base = './src/base.js';

module.exports = {
  devtool: 'none',
  entry: entry,
  output: {
    path: 'standalone',
    filename: '[name].js',
    publicPath: '',
    library: '[name]',
    libraryTarget: 'umd'
  },
  externals: {
    'preact': 'preact'
  },
  module: {
    noParse: ['preact'],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel?presets[]=react,presets[]=es2015'
      }
    ]
  }
};
