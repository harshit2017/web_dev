//f5.js

function factorial(n) {
	if (n === 0) {
		return 1;
	}
	return n * factorial(n - 1);
}

var n = Number(prompt("Enter the number"));
console.log(factorial(n));