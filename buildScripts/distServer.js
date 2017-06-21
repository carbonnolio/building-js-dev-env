import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/*eslint-disable no-console*/

const port = 3200;
const server = express();

server.use(compression());
server.use(express.static('dist'));

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
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
