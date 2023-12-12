abstract class Vehicle {
  // abstract itu buat define yg nilainya ga pasti/beda beda
  abstract wheels: number;

  start(): void {
    console.log("bruummm...");
  }
}

class Car extends Vehicle {
  wheels: number = 4;
}

class Motorcycle extends Vehicle {
  wheels: number = 2;
}

let car = new Car();
console.log(car.wheels);
car.start();

let motor = new Motorcycle();
console.log(motor.wheels);
motor.start();
