var http = require('http');
var fs = require('fs');

var file = process.argv[3];

var server = http.createServer(function (req, res) {
	var readFile = fs.createReadStream(file);

	readFile.on('open', function(){
	 	readFile.pipe(res);
	 });
});

server.listen(process.argv[2]);


// helpful page https://docs.nodejitsu.com/articles/advanced/streams/how-to-use-fs-create-read-stream

// official solution:

// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))