const Manager = require("../lib/Manager.js");
const newManager = new Manager(
  "Julie Manager",
  3,
  "juliemanager@email.com",
  "103"
);

describe("test Manager properties", () => {
  test("Should return the office number of manager", () => {
    expect(newManager.officeNumber).toBe("103");
  });
  test("Should return the role of Manager", () => {
    expect(newManager.role).toBe("Manager");
  });
});

describe("test Manager methods", () => {
  test("Should return the office number of Manager", () => {
    expect(newManager.getOfficeNumber()).toBe("103");
  });
  test("Should return the role of Manager", () => {
    expect(newManager.getRole()).toBe("Manager");
  });
});
