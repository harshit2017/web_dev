//f3.js
function allCombination(s) {

	for (var i = 0; i < s.length; i++) {
		var n = "";
		for (var j = i; j < s.length; j++) {

			n = n + s[j];
			console.log(n + ",");

		}
	}
}
var s = prompt("Enter the string");
allCombination(s);