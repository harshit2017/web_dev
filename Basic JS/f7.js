//f7.js

function printNum(a, b) {
	if (a >= b) {
		return;
	}
	console.log(a);
	printNum(a + 1, b);
}

var a = Number(prompt("Enter number 1"));

var b = Number(prompt("Enter number 2"));
printNum(a + 1, b);