var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var urlList = [url1,url2,url3];
var output = ['','',''];
var count = 0;

// Well, I should have written a function, but my first attempt got tangled up
// so i seperated it for clarity

http.get(url1, function(response) {
	response.setEncoding('utf8');
	response.on('data', function(data) {
			output[0] += data;
		});
		response.on('error', console.error);
		response.on('end', function() {
			count += 1;
			if (count === 3) {
				output.forEach(function(item){
					console.log(item);
				});
			}
		});
});

http.get(url2, function(response) {
	response.setEncoding('utf8');
	response.on('data', function(data) {
			output[1] += data;
		});
		response.on('error', console.error);
		response.on('end', function() {
			count += 1;
			if (count === 3) {
				output.forEach(function(item){
					console.log(item);
				});
			}
		});
});

http.get(url3, function(response) {
	response.setEncoding('utf8');
	response.on('data', function(data) {
			output[2] += data;
		});
		response.on('error', console.error);
		response.on('end', function() {
			count += 1;
			if (count === 3) {
				output.forEach(function(item){
					console.log(item);
				});
			}
		});
});

// official solution:
 // var http = require('http')
 //    var bl = require('bl')
 //    var results = []
 //    var count = 0

 //    function printResults () {
 //      for (var i = 0; i < 3; i++)
 //        console.log(results[i])
 //    }

 //    function httpGet (index) {
 //      http.get(process.argv[2 + index], function (response) {
 //        response.pipe(bl(function (err, data) {
 //          if (err)
 //            return console.error(err)

 //          results[index] = data.toString()
 //          count++

 //          if (count == 3)
 //            printResults()
 //        }))
 //      })
 //    }

 //    for (var i = 0; i < 3; i++)
 //      httpGet(i)

