$(document).ready(function () {
	for(var i = 1; i < 101; i++) {
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
});