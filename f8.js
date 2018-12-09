//f8.js

function sumArr(a, sum, i) {
	if (i > a.length - 1) {
		return sum;
	}
	sum = sum + a[i];
	return sumArr(a, sum, i + 1);
}


var a = [],
	length = Number(prompt("length"));
for (var i = length - 1; i >= 0; i--) {
	a[i] = Number(prompt());
}
console.log(sumArr(a, 0, 0));