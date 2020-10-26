/// Section 1.1 - Algorithm E
/// From Knuth's The Art of Computer Programming
/// Author: Carlos L. Cuenca
/// Date: 10/26/2020

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

function algorithm_e(m, n) {

	m = Math.abs(m);
	n = Math.abs(n);

	if(m < n) {

		var temp = n;
		n = m;
		m = temp;

	}

	var remainder = m % n;

	while(remainder > 0) {

		remainder = m % n;

		if(remainder == 0) break;

		m = n;
		n = remainder;

	}

	return n;

}

/// -------
/// Program

rl.on('line', function(line) {

	var array = line.split(' ').map(Number);

	console.log(algorithm_e(array[0], array[1]));

});
