const Employee = require("./lib/Employee.cjs");

const generateTeam = (team) => {
  // Generate Manager
  const generateManager = (manager) => {
    return `
        <div class="container">
        <div class="row">
          <div class="row team-area col-12 d-flex justify-content-center">
            <div class="card employee-card">
              <div class="card-header bg-primary text-white">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="cared-title">
                  <i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}
                </h3>
              </div>
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group item">ID: ${manager.getId()}</li>
                  <li class="list-group item">Email: ${manager.getEmail()}</li>
                  <li class="list-group item">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  };

  // Generate Engineer
  const generateEngineer = (engineer) => {
    return `
    <div class="container">
      <div class="row">
        <div class="row team-area col-12 d-flex justify-content-center">
          <div class="card employee-card">
            <div class="card-header bg-primary text-white">
              <h2 class="card-title">${engineer.getName()}</h2>
              <h3 class="cared-title">
                <i class="fas fa-mug-hot mr-2"></i>${engineer.getRole()}
              </h3>
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group item">ID: ${engineer.getId()}</li>
                <li class="list-group item">Email: ${engineer.getEmail()}</li>
                <li class="list-group item">GitHub: ${engineer.getGitHub()}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  };

  const generateIntern = (intern) => {
    `<div class="container">
    <div class="row">
      <div class="row team-area col-12 d-flex justify-content-center">
        <div class="card employee-card">
          <div class="card-header bg-primary text-white">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="cared-title">
              <i class="fas fa-mug-hot mr-2"></i>${intern.getRole()}
            </h3>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group item">ID: ${intern.getId()}</li>
              <li class="list-group item">Email: ${intern.getEmail()}</li>
              <li class="list-group item">School: ${intern.getSchool()}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  };

  const html = [];

  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );
  return html.join("");
};

module.exports = (team) => {
  return ` <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Profile</title>
      </head>
      <body>
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-danger">
              <h1 class="'text-center text-white">My Team</h1>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>`;
};
