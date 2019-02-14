const express = require('express');
debugger;
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(favicon('./build/favicon.ico'));
app.use(express.static('./'));
app.use(express.static(path.join('./', 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join('./', 'build', 'index.html'));
});
app.listen(port);
console.log('Server started');

