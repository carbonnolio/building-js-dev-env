import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/*eslint-disable no-console*/

const port = 3200;
const server = express();
const compiler = webpack(config);

server.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

server.get('/user', (rec, res) => {
  res.json([
    {"id": 1, "firstName": "Joe", "lastName": "Jonson"},
    {"id": 2, "firstName": "Ben", "lastName": "Smith"},
    {"id": 3, "firstName": "Sean", "lastName": "Been"}
  ]);
});

server.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
