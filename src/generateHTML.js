// funtion to generate Manager card
const generateManager = function (manager) {
  return `<div class="card text-white bg-dark" style="width: 18rem">
  <div class="card-header m-3">${manager.name}</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item m-2">ID#:</li>
    <li class="list-group-item m-2">Email:</li>
    <li class="list-group-item m-2">stuff:</li>
  </ul>
</div>`;
};
// funtion to generate Engineer card
const generateEngineer = function (engineer) {
  return `<div class="card text-white bg-dark" style="width: 18rem">
  <div class="card-header m-3">Employee Name</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item m-2">ID#:</li>
    <li class="list-group-item m-2">Email:</li>
    <li class="list-group-item m-2">stuff:</li>
  </ul>
</div>`;
};
// funtion to generate Intern card
const generateIntern = function (intern) {
  return `<div class="card text-white bg-dark" style="width: 18rem">
  <div class="card-header m-3">Employee Name</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item m-2">ID#:</li>
    <li class="list-group-item m-2">Email:</li>
    <li class="list-group-item m-2">stuff:</li>
  </ul>
</div>`;
};

//function that will genetate the html template
function generateHTML(employeeCards) {
  return ``;
}

module.exports = generateHTML;
