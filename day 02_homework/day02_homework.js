function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owners = [];
  this.addOwner = function (person) { this.owners.push(person) };
  // this.removeOwner = function (person) {
  // }
  this.getOwnersCount = function () { return this.owners.length };
  this.getCarInfo = function () { return `${this.make} ${this.model} released in ${this.year}` }
  this.getFullInfo = function () { return `${this.make} ${this.model} from ${this.year}. ${this.getOwnersCount()} person owns this car. These are - ${this.getOwnerNames().join(", ")}.` };

}

function Person(name, surname, age, gender, cars = []) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.gender = gender;
  this.cars = cars;
  this.buysCar = function (car) { this.cars.push(car); car.addOwner(this) };

  this.fullName = function () { return `${name} ${surname}` };