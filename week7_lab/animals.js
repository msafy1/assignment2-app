function babyLion(name, age) {
  this.name = name;
  this.age = age;
  this.type = “babyLion”;
  this.image = "babyLion.jpg";
}

function racoon(name, age) {
  this.name = name;
  this.age = age;
  this.type = “racoon”;
  this.image = "racoon.jpg";
}

function owl(name, age) {
  this.name = name;
  this.age = age;
  this.type = “MyAnimal”;
  this.image = "owl.jpg";
}

var animals = [new babyLion(), new racoon(), new owl()]
var names = ["Leo", "Olly", "Rene"]

var leo = new babyLion("Leo", 11)
var rene = new racoon("Rene", 3)
var olly = new owl("Olly", 7)

function generateRandomIndex(maxIndex) {
	Math.floor(Math.random()*maxIndex);
}


function generateRandomAnimal(){
	var randomldx = generateRandomIndex(3);
	var randomAnimal = animals[randomldx];

	if (randomAnimal instanceOf babyLion) 
	{
		return new babyLion(generateRandomName(), generateRandomAge());
	}
	if (randomAnimal instanceOf racoon);
	{
		return new racoon(generateRandomName(), generateRandomAge());
	}
	if (randomAnimal instanceOf owl);
	{
		return new owl(generateRandomName(), generateRandomAge());
	}
}

function generateRandomName(){
	var randomldx = generateRandomIndex(3);
	return randomldx;
}

$(document).ready(function() {
	  var animal = generateRandomAnimal();
	  // fill in code
  	  $("#animal-properties").text(animal.name + "  " + animal.age + "years old");
  	  $("#animal-img").attr("src", animal.image);
	}
});



