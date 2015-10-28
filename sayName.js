//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
var Person = function (name, age) {
	this.name = name;
	this.age = age;
}

//Now create three instances of Person with data you make up

  //code here

  var p1 = new Person("pi", 3.14);
  var p2 = new Person("CoolBlue McCrew", 7.34);
  var p3 = new Person("Jane Doe", 20);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.



  //code here
Person.prototype.sayName = function () {
	alert(this.name);
}