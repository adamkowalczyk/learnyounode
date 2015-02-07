var extmodule = require('./extmodule.js');

var	dir = process.argv[2];
var	ext = process.argv[3];


extmodule(dir, ext, function(err, data){
	if (err) {
		console.log ('Error');
	}
	else {
		data.forEach(function(file){
			console.log(file);
		});
	}
});