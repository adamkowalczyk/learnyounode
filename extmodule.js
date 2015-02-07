var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {
	ext = '.'+ext;
	var result = [];
	
	fs.readdir(dir, function(err, list) {
		if (err) {
			return callback(err);
		}
		else {
			list.forEach(function(file){
				if (path.extname(file) === ext) {
					result.push(file);
				}
			});
			return callback(null, result);
		}
	});
};