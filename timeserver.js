var net = require('net');



function myDateString(d) {
	// add leading zero to number under 10, from MDN
	function pad(n){return n<10 ? '0'+n : n;}
	return 	d.getFullYear()+'-'+
			pad(d.getMonth()+1)+'-'+
			pad(d.getDate())+' '+
			pad(d.getHours())+':'+
			pad(d.getMinutes());
}

var server = net.createServer(function (socket) {
 	var d = new Date();
 	socket.write(myDateString(d)+'\n');
 	socket.end();
});


server.listen(process.argv[2]);

// Official Solution

// var net = require('net')

// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-'
//     + zeroFill(d.getMonth() + 1) + '-'
//     + zeroFill(d.getDate()) + ' '
//     + zeroFill(d.getHours()) + ':'
//     + zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))