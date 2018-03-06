/*** Object Constructors ***/
function owl(name, age) {
  this.name = name;
  this.age = age;
  this.image = "owl.jpg";
  this.type = "owl";
}

function racoon(name, age) {
  this.name = name;
  this.age = age;
  this.image = "racoon.jpg"
  this.type = "racoon";
}

function babyLion(name, age) {
  this.name = name;
  this.age = age;
  this.image = "babyLion.jpg"
  this.type = "babyLion";
}

/*** Global Variables ***/
var animals = [new owl(), new racoon(), new babyLion()];
var names = ["Toothless", "Marshmallow", "Momo", "Coco", "Ollie", "Oscar", "Bella", "Ruby", "Apples"];

/*** Functions ***/
// get a random index for an array from 0 to maxIndex (not inclusive)
function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

// generates either a owl, racoon, or babyLion with a random name and random age
function generateRandomAnimal() {
  var randomIdx = getRandomIndex(animals.length);
  var randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof owl) 
  {
    return new owl(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof racoon) 
  {
    return new racoon(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof babyLion) 
  {
    return new babyLion(generateRandomName(), generateRandomAge());
  }
}

// generates a random name from list of names
function generateRandomName() {
  var randomIdx = getRandomIndex(names.length);
  return names[randomIdx];
}

// generates a random age from 0 to 5
function generateRandomAge() {
  var randomIdx = getRandomIndex(5);
  return randomIdx;
}

/*** Document Load ****/
$(document).ready(function() {

  // generate a random animal when the document opens
  var animal = generateRandomAnimal();
  // update the page based on the animal properties
  $("#animal-properties").text(animal.name + "  " + animal.age + "years old");
  $("#animal-img").attr("src", animal.image);

});
