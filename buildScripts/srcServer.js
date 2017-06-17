var express = require('express');
var path = require('path');
var open = require('open');

var port = 3200;

var server = express();

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

server.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
