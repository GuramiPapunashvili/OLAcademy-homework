class Vechile {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}
class Car extends Vechile {
  constructor(make, model, year) {
    super(make, model)
    this.year = year;
   
  }
  owners = [];
  addOwner = function (person) { this.owners.push(person) };
  getCarInfo = function () { return `${this.make} ${this.model} released in ${this.year}` };
  getOwnersCount = function () { return this.owners.length };
}

class Person {
  constructor(name, surname, age, gender, cars = []) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.cars = cars;
  }
  fullName = function () { return `${this.name} ${this.surname}` };
  countCars = function () { return this.cars.length };
  buysCar = function (car) { this.cars.push(car); car.addOwner(this) };

}
