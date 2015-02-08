var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
	var urlObj = url.parse(req.url,true);
	if (urlObj.pathname === '/api/parsetime') {
		var d = new Date(urlObj.query.iso);
		var output = {};
		output.hour = d.getHours();
		output.minute = d.getMinutes();
		output.second = d.getSeconds();

		res.writeHead(200, { 'content-type': 'application/json' });
		res.end(JSON.stringify(output));
	}
	else if (urlObj.pathname === '/api/unixtime') {
		var d2 = new Date(urlObj.query.iso);
		var output2 = {};
		output2.unixtime = d2.getTime();
		res.writeHead(200, { 'content-type': 'application/json' });
		res.end(JSON.stringify(output2));
	}
});

server.listen(process.argv[2]);

// official solution:
//     var http = require('http')
//     var url = require('url')

//     function parsetime (time) {
//       return {
//         hour: time.getHours(),
//         minute: time.getMinutes(),
//         second: time.getSeconds()
//       }
//     }

//     function unixtime (time) {
//       return { unixtime : time.getTime() }
//     }

//     var server = http.createServer(function (req, res) {
//       var parsedUrl = url.parse(req.url, true)
//       var time = new Date(parsedUrl.query.iso)
//       var result

//       if (/^\/api\/parsetime/.test(req.url))
//         result = parsetime(time)
//       else if (/^\/api\/unixtime/.test(req.url))
//         result = unixtime(time)

//       if (result) {
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify(result))
//       } else {
//         res.writeHead(404)
//         res.end()
//       }
//     })
//     server.listen(Number(process.argv[2]))