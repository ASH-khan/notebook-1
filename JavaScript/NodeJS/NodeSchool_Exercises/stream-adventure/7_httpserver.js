var http = require("http");
var through = require("through2");

var server = http.createServer(function(req, res) {

  if (req.method === "POST") {
    req.pipe(through(function (buffer, _, next) {
        var line = buffer.toString();
        this.push(line.toUpperCase());
        next();
    })).pipe(res);
  }

  else {
    res.end("Please use POST http request methods");
  }

});

server.listen(Number(process.argv[2]));


// Here's the reference solution:

// var http = require('http');
// var through = require('through2');
//
// var server = http.createServer(function (req, res) {
//     if (req.method === 'POST') {
//         req.pipe(through(function (buf, _, next) {
//             this.push(buf.toString().toUpperCase());
//             next();
//         })).pipe(res);
//     }
//     else res.end('send me a POST\n');
// });
// server.listen(parseInt(process.argv[2]));
