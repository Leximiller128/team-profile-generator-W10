const Employee = require("../lib/Employee.js");

describe("the user input for employees", () => {
  test("create an object for all added employees", () => {
    const employee = new Employee();
    expect(typeof employee).tobe("employee");
  });
  test("creates an array for employee input", () => {
    const employee = new Employee("Lexi", 1, "leximiller128@gmail.com");
    expect(employee).toEqual({
      name: "Lexi",
      id: "1",
      email: "leximiller128@gamail.com",
    });
  });
  test("the getRole() function should return the employee class", () => {
    const test = new Employee("Lexi", 1, "leximiller128@gmail.com");
    expect(test.getRole()).toEqual("Employee");
  });
});
