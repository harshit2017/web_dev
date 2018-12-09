var person = {
	name: "harshit",
	age: 21,
	color: "red",
	display: function() {
		console.log(this.name);
		console.log(this.age);
		console.log(this.color);
	}
};


person.display();