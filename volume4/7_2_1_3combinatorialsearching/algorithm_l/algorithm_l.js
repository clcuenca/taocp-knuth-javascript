/// Section 7.2.1.3 - Combinatronics
/// Lexicographic Combination Generator
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

function algorithm_l(n, choose) {

	if(n < choose) return;

	var combinations = [];

	for(var j = 0; j < choose; j++) {

		combinations.push(j);

	}

	combinations.push(n);
	combinations.push(0);

	var j = 0;

	while(j < choose) {

		var sequence = "";

		for(var index = 0; index < choose; index++) {

			sequence += combinations[index].toString() + " ";

		}

		console.log(sequence);

		j = 0

		while(combinations[j] + 1 == combinations[j + 1]) {

			combinations[j] = j;

			j++;

		}

		combinations[j]++;

	}

}

/// -------
/// Program

var number = 6

for(var choose = 0; choose < number; choose++) {

	algorithm_l(number, choose);

}
