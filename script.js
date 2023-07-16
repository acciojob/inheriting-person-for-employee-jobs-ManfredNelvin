// Person constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add greet method to Person prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
}

// Employee constructor
function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // Inherit properties from Person
  this.jobTitle = jobTitle;
}

// Inherit the Person prototype in the Employee prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add jobGreet method to Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
}

// Usage
var person = new Person("John Doe", 30);
person.greet(); // Output: Hello, my name is John Doe, I am 30 years old.

var employee = new Employee("Jane Smith", 25, "Software Engineer");
employee.greet(); // Output: Hello, my name is Jane Smith, I am 25 years old.
employee.jobGreet(); // Output: Hello, my name is Jane Smith, I am 25 years old, and my job title is Software Engineer.
