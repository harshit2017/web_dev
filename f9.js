//f9.js
function isEven(n) {
	if (n === 0)
		return true;
	if (n < 0)
		return false;
	return isEven(n - 2);
}

var n = Number(prompt("Enter num"));
console.log(isEven(n));