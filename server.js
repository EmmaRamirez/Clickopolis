const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const app = express();
const port = process.env.PORT || 3000;

// returns a Compiler instance
// const compiler = webpack(webpackConfig);
//
// compiler.watch({
//   aggregateTimeout: 300,
//   poll: true
// }, function (err, stats) {
//   if (err) console.lfog(err);
//   else console.log(stats.toJson('normal'));
// })


// webpack({
//     webpackConfig
// }, function(err, stats) {
//     if (err) console.log(err);
//     else console.log(stats.toJson('normal'));
// });

app.use(express.static('dist'));


app.get('/', function (req, res) {
  express.static('index.html');
});


app.listen(port);
console.log('Server starting on port ' + port);
