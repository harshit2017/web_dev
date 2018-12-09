//f1.js

//reverse the no.

function reverse_a_number(n) {
	var rev = "";
	n = n + "";
	while (n != "") {
		rev = rev + n.slice(n.length - 1);
		n = n.slice(0, n.length - 1);
		//console.log(n);
	}
	return rev;
}
var n = prompt("Enter the number");
console.log(reverse_a_number(n));