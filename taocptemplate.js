/// 
/// From Knuth's The Art of Computer Programming
/// Author: Carlos L. Cuenca
/// Date: 

/// -------------------
/// stdin Configuration

const readline = require("readline")
const rl = readline.createInterface({

	input: process.stdin,
	output: process.stdout,
	terminal: false

});

/// --------------------
/// Function Definitions

/// -------
/// Program

rl.on('line', function(line) {

	var array = line.split(' ').map(Number);


});
