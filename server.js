const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static('public'));


app.get('/', function (req, res) {
  express.static('index.html');
});


app.listen(port);
console.log(`Server starting on port${process.env.PORT}`);
