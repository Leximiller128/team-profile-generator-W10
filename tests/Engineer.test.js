const Engineer = require("../lib/Engineer.js");
const newEngineer = new Engineer(
  "Sam Engineer",
  2,
  "samengineer@email.com",
  "samGitHub"
);

describe("test Engineer properties", () => {
  test("Should return the github of Engineer", () => {
    expect(newEngineer.gitHub).toBe("samGitHub");
  });
  test("Should return the role of Engineer", () => {
    expect(newEngineer.role).toBe("Engineer");
  });
});

describe("test Engineer methods", () => {
  test("Should return the github of Engineer", () => {
    expect(newEngineer.getGitHub()).toBe("samGitHub");
  });
  test("Should return the role of Engineer", () => {
    expect(newEngineer.getRole()).toBe("Engineer");
  });
});
