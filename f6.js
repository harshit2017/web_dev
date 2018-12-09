//f6.js
function gcd(a, b, d, div) {
	if (d > a || d > b)
		return div;

	if (a % d === 0 && b % d === 0) {
		div = d;

	}
	return gcd(a, b, d + 1, div);
}

var a = Number(prompt("Enter first number"));

var b = Number(prompt("Enter second number"));

console.log(gcd(a, b, 1, 1));