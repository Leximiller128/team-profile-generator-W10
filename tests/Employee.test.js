const Employee = require("../lib/Employee.js");

const employee = new Employee("Lexi Miller", 1, "leximiller128@gmail.com");

describe("Employee properties are correctly set", () => {
  test("Employee name returns expected value", () => {
    expect(employee.name).toBe("Lexi Miller");
  });
  test("Employee id returns expected value", () => {
    expect(employee.id).toBe(1);
  });
  test("Employee email returns expected value", () => {
    expect(employee.email).toBe("leximiller128@gmail.com");
  });
  test("Employee role returns expected value", () => {
    expect(employee.role).toBe("Employee");
  });
});

describe("Employee methods work as expected", () => {
  test("Employee getName() method works as expected", () => {
    expect(employee.getName()).toBe("Lexi Miller");
  });
  test("Employee getId() method works as expected", () => {
    expect(employee.getId()).toBe(1);
  });
  test("Employee getEmail() works as expected", () => {
    expect(employee.getEmail()).toBe("leximiller128@gmail.com");
  });
  test("Employee getRole method works as expected", () => {
    expect(employee.getRole()).toBe("Employee");
  });
});
