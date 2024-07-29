const { format, parse } = require("date-fns"); //! npm install date-fns

class Car {
  constructor(name, model) {
    this.name = name;
    this.model = model;
    this.isHere = true;
    this.startDate = null;
    this.endDate = null;
    this.isClient = "owner";
  }

  checkout(start_date, end_date) {
    this.isHere = false;
    this.startDate = start_date;
    this.endDate = end_date;
  }

  checkin() {
    this.isHere = true;
    this.startDate = null;
    this.endDate = null;
  }

  toString() {
    const whoHasCar = this.isHere ? "owner" : "client";
    return `Car is ${this.name} ${this.model} and Car is with the ${whoHasCar}. Start Date: ${this.startDate}, End Date: ${this.endDate}`;
  }
}

class Customer {
  constructor(name) {
    this.name = name;
  }

  toString() {
    return `This is our customer ${this.name}`;
  }
}

class TaskManager {
  constructor() {
    this.cars = [];
    this.members = [];
  }

  addCar(car) {
    this.cars.push(car);
    return `${car.name} is added`;
  }

  addMember(customer) {
    this.members.push(customer);
    return `${customer.name} is added`;
  }

  carCheckout(customer, car, start_date, end_date) {
    // Check if customer is registered
    if (!this.members.includes(customer)) {
      return `Customer ${customer.name} is not registered.`;
    }

    // Check if car is available
    if (!this.cars.includes(car)) {
      return `Car ${car.name} is not available.`;
    }

    // Check if car is already rented during the requested period
    if (car.startDate && car.endDate) {
      const start = parse(start_date, "dd-MM-yyyy", new Date());
      const end = parse(end_date, "dd-MM-yyyy", new Date());
      const car_start = parse(car.startDate, "dd-MM-yyyy", new Date());
      const car_end = parse(car.endDate, "dd-MM-yyyy", new Date());

      if (start <= car_end && end >= car_start) {
        return `Car ${car.name} is already rented from ${car.startDate} to ${car.endDate}.`;
      }
    }

    // Checkout the car
    car.checkout(start_date, end_date);
    car.isClient = customer.name;
    return `Car ${car.name} has been rented by ${customer.name} from ${start_date} to ${end_date}.`;
  }

  carCheckin(car) {
    car.checkin();
    return `Car ${car.name} has been returned.`;
  }
}

// Example usage
const taskManager = new TaskManager();

const customer1 = new Customer("Burhan");
console.log(taskManager.addMember(customer1));

const car1 = new Car("Toyota", "Corolla");
console.log(taskManager.addCar(car1));

// Checkout car
console.log(
  taskManager.carCheckout(customer1, car1, "01-08-2024", "10-08-2024")
);

// Attempt to checkout the same car during an overlapping period
console.log(
  taskManager.carCheckout(customer1, car1, "05-08-2024", "15-08-2024")
);

// Checkin car
console.log(taskManager.carCheckin(car1));

// Checkout car again with a non-overlapping period
console.log(
  taskManager.carCheckout(customer1, car1, "15-08-2024", "20-08-2024")
);

// Print car status
console.log(car1.toString());
