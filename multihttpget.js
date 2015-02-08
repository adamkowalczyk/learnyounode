var http = require('http');
var url = process.argv[2];

http.get(url, function(response){
	// console.log(response);
	var output = "";
	response.setEncoding('utf8');
	response.on('data', function(data) {
		output += data;
	});
	response.on('error', console.error);
	response.on('end', function() {
		console.log(output.length);
		console.log(output);
	});

});


// learnyounode solution:
// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })