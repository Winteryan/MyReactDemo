var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('./webpack.development');
var colors = require('colors');

var config = require('../configs');

var app = express();
var compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  hot: true,
  historyApiFallback: true,
  compress: true,
  noInfo: true,
  stats: {
    colors: true,
  },
  stats: {
    colors: true,
  },
}));

app.use(require('webpack-hot-middleware')(compiler));

app.set('port', process.env.PORT || config.PORT);

if (app.get('env') === 'production') {
  app.use(function (req, res, next) {
    var protocol = req.get('x-forwarded-proto');
    protocol == 'https' ? next() : res.redirect('https://' + req.hostname + req.url);
  });
}

app.listen(app.get('port'), (err) => {
  if (err) {
    console.log(err);
  }
  console.log((' http://localhost:').bgGreen.white + (app.get('port') + ' ').bgGreen.white);
  console.log(' PLEASE WAIT...        '.bgYellow.red);
});
