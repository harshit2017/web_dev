//js4.js
//rotate string
var s = prompt("Enter the string");
s = s[s.length - 1] + s.slice(0, (s.length - 1));
alert("s:" + s);