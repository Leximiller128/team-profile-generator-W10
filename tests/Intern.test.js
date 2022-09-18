const Intern = require("../lib/Intern.js");
const newIntern = new Intern(
  "Joe Intern",
  3,
  "joeintern@email.com",
  "Boulder University"
);

describe("test Intern properties", () => {
  test("Should return the school of Intern", () => {
    expect(newIntern.school).toBe("Boulder University");
  });
  test("Should return the role of Intern", () => {
    expect(newIntern.role).toBe("Intern");
  });
});

describe("test Intern methods", () => {
  test("Should return the school of Intern", () => {
    expect(newIntern.getSchool()).toBe("Boulder University");
  });
  test("Should return the role of Intern", () => {
    expect(newIntern.getRole()).toBe("Intern");
  });
});
