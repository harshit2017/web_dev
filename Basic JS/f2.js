//f2.js

function isPalindrome(s) {
	var palindrome = true;
	var i = 0,
		j = s.length - 1;
	while (i <= j) {
		if (s[i] == " ") {
			++i;
		} else if (s[j] == " ") {
			--j;
		}

		if (s[i] != s[j])
			palindrome = false;

		++i, --j;
	}
	return palindrome;

}



var s = prompt("Enter the string");
console.log(isPalindrome(s));