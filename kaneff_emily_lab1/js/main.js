// Arrow Function 



// BLOCK SCOPE
function block () {
	var click = 0;

	document.querySelector('#q2_btn').addEventListener('click', function() {
		if (click === 0) 
		{
			let content = '';

			let show = "Dare Devil";

			if(true) {
				let show ="Master Chef";
				let newP = document.createElement("p");
				content = document.createTextNode(show);
				newP.appendChild(content);
				document.getElementById("q2").appendChild(newP);
				console.log(show);
				click++;
			}

			let newP = document.createElement("p");
			content = document.createTextNode(show);
			newP.appendChild(content);
			document.getElementById("q2").appendChild(newP);
			console.log(show);
			click++;
		}
	});
}

block();

// CLASSES AND INHERITANCE 

function classes() {
	var click = 0;

	//original class creation

	class Flower {
		constructor(name, color) {
			this.name = name;
			this.color = color;
		}

		fullInfo() {
			let full = `The flower is a ${this.name} and it is ${this.color}`;
			var content = '';
			let newP = document.createElement("p");
			content = document.createTextNode(full);
			newP.appendChild(content);
			document.getElementById("q3").appendChild(newP);
		}
	}

	var daisy = new Flower("Daisy", "white");

	//class inheritance

	class Weed extends Flower {
		constructor() {
			super("Dandelion", "yellow")
		}
	}

	var dandelion = new Weed();

	//document output

	document.querySelector('#q3_btn').addEventListener('click', function() {	
		if (click===0){
			daisy.fullInfo();
			dandelion.fullInfo();
			click++;
		}
	});

}

classes();

// DEFAULT PARAMETERS

function defaultParam() {
	var click = 0;

	function dragons (mood = "sad", weight = "fat", strength = "weak") {
			let full = `You are a ${mood}, ${weight}, and ${strength} dragon.`;
			var content = '';
			let newP = document.createElement("p");
			content = document.createTextNode(full);
			newP.appendChild(content);
			document.getElementById("q4").appendChild(newP);
	}

	document.querySelector('#q4_btn').addEventListener('click', function() {	
		if (click===0){
			dragons("happy", "skinny", "strong");
			click++;
		}
	});
}

defaultParam();

// DESTRUCTURING ASSIGNMENT
function desruct(){
	var click = 0;

	var clock = {
		type: "alarm",
		color: "red",
		sound: "annoying"
	};

	function clocks ({type, sound}) {
		let full = `My ${type} clock is ${sound}`;
		var content = '';
		let newP = document.createElement("p");
		content = document.createTextNode(full);
		newP.appendChild(content);
		document.getElementById("q5").appendChild(newP);
	}

	document.querySelector('#q5_btn').addEventListener('click', function() {	
		if (click===0){
			clocks(clock);
			click++;
		}
	});
}

desruct();

// GENERATORS do I need to use a polyfiller?

function gen() {
	var click = 0;

	function* btnText() {
		yield "Click me!";
		yield "Click me again!";
		yield "And again!";
		yield "One more time!";
		yield "Done.";
	}

	var clickBtn = btnText();

	document.querySelector('#q6_btn').addEventListener('click', function() {	
		if (click < 5 ){
			let full = clickBtn.next().value;
			document.getElementById("q6_btn").innerHTML = full;
			click++;
		}
	});
}

gen();

// PROMISES


// REST PARAMETERS

function rest(){

	var click = 0;

	function compliments(name, ...comps) {
		return comps.map((comps) => name + comps);
	}

	var result = compliments(" Emily is ", "awesome", "smart", "funny", "gorgeous");
	
	document.querySelector('#q8_btn').addEventListener('click', function() {	
		if (click === 0){
			let full = result;
			var content = '';
			let newP = document.createElement("p");
			content = document.createTextNode(full);
			newP.appendChild(content);
			document.getElementById("q8").appendChild(newP);
			click++;
		}
	});
}

rest();

// SPREAD OPERATOR
function spread(){
	var click = 0;

	var fruits = [' bananas', ' apples', ' oranges', ' blackberries'];
	var healthyThings = ['lettuce', ...fruits, ' tomatoes'];

	document.querySelector('#q9_btn').addEventListener('click', function() {	
		if (click === 0){
			let full = healthyThings;
			var content = '';
			let newP = document.createElement("p");
			content = document.createTextNode(full);
			newP.appendChild(content);
			document.getElementById("q9").appendChild(newP);
			click++;
		}
	});
}

spread();

// TEMPLATE STRINGS

function templateStr() {
	var click = 0;

	function genContent(name, gender, hairColor) {
		let full = `${name} is a ${gender} and has ${hairColor} hair.`;
		var content = '';
		let newP = document.createElement("p");
		content = document.createTextNode(full);
		newP.appendChild(content);
		document.getElementById("q10").appendChild(newP);
	}

	document.querySelector('#q10_btn').addEventListener('click', function() {	
		if (click === 0){
			genContent("Dean", "boy", "brown");
			click++;
		}
	});
}

templateStr();

