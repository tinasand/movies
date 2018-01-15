var express = require('express'),
    path = require('path');
var rootPath = path.normalize(__dirname );//var rootPath = path.normalize(__dirname + '/../');

var  port = 8802

var app = express();
console.log('rootPath', rootPath, __dirname);

app.use(express.static(rootPath));
app.listen(port);
console.log('Listening on port ' + port + '...');