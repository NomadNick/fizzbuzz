$(document).ready(function () {

	var stringEntry = prompt('Please enter a number!');
	var numEntry = +stringEntry;

	var fizzBuzz = function() {
		for(var i = 1; i < numEntry; i++) {
		if(i % 3 === 0 && i % 5 === 0) {
			$('body').append('FizzBuzz' + ' ');
		}
		else if(i % 3 === 0) {
			$('body').append('Fizz' + ' ');
		}
		else if(i % 5 === 0) {
			$('body').append('Buzz' + ' ');
		}
		else {
			$('body').append(i + ' ')
		}
		}
	}

	if(isNaN(numEntry) == true) {
		alert('Please make sure you have entered a number correctly.');
		return stringEntry;
	}

	else if(numEntry % 1 != 0) {
		alert('Please only enter whole numbers without decimals.');
		return stringEntry;
	}
	else {
		fizzBuzz(numEntry);
	}


});