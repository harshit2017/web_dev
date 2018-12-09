//f4.js



function power(base, n) {

	var ans = 1;
	if (n === 0)
		return 1;
	else {
		for (var i = 1; i <= n; i++) {
			ans = ans * base;
		}
		return ans;
	}

}


var x = Number(prompt("Enter the base"));
var n = Number(prompt("Enter the exponent"));
console.log(power(x, n));