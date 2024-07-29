function randomNumber() {
  const myString = "qwertzuioasdfghjklyxcvbnm1234567890";
  const myArray = myString.split("");
  let target = "";
  for (let i = 0; i < myString.length - Math.floor(myString.length / 2); i++) {
    target += myArray[Math.floor(Math.random() * myString.length)];
  }
  return target;
}

class PhoneBook {
  constructor(name, number) {
    this.name = name;
    this.number = number;
    this.id = randomNumber();
    this.date = new Date().toISOString();
  }

  toString() {
    return `this is ${this.name} and his phone is ${this.number}. He registered himself at ${this.date}`;
  }
}

class PhoneTask {
  constructor() {
    this.phones = {};
  }

  register_phone(phone) {
    if (this.phones[phone.name]) {
      return `This phone ${phone.number} is already in the phone book`;
    } else {
      this.phones[phone.name] = phone.number;
      return `Phone ${phone.name} registered successfully.`;
    }
  }
  remove_phone(name) {
    if (this.phones[name]) {
      delete this.phones[name];
      return `Phone ${name} removed successfully.`;
    } else {
      return `Phone ${name} not found.`;
    }
  }

  edit_phone(name, newNumber) {
    if (this.phones[name]) {
      this.phones[name] = newNumber;
      return `Phone ${name} updated successfully.`;
    } else {
      return `Phone ${name} not found.`;
    }
  }

  search_phone(name) {
    if (this.phones[name]) {
      return `Phone ${name} has the number ${this.phones[name]}`;
    } else {
      return `Phone ${name} not found.`;
    }
  }
  toString() {
    return Object.keys(this.phones)
      .map((name) => `${name}: ${this.phones[name]}`)
      .join(", ");
  }
}

// Example usage
const phoneTask = new PhoneTask();

const number1 = new PhoneBook("Burhan", 1231414);
console.log(number1.toString());

console.log(phoneTask.register_phone(number1));
console.log(phoneTask.register_phone(number1)); // Trying to register the same phone again

const number2 = new PhoneBook("Alice", 567890);
console.log(phoneTask.register_phone(number2));

console.log(phoneTask.toString());

console.log(phoneTask.search_phone("Burhan"));
console.log(phoneTask.search_phone("Alice"));

console.log(phoneTask.edit_phone("Burhan", 987654));
console.log(phoneTask.search_phone("Burhan"));

console.log(phoneTask.remove_phone("Burhan"));
console.log(phoneTask.search_phone("Burhan"));

console.log(phoneTask.toString());
