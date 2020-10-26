/// Section 1.1 - Algorithm F
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

function algorithm_f(m, n) {

	m = Math.abs(m);
	n = Math.abs(n);

	if(m < n) {

		var temp = n;
		n = m;
		m = temp;

	}

	if(n == 0) return m;

	return algorithm_f(n, m % n);

}

/// -------
/// Program

rl.on('line', function(line) {

	var array = line.split(' ').map(Number);

	console.log(algorithm_f(array[0], array[1]))

});
