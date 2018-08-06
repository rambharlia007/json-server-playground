// employees.js
var faker = require('faker')

var employees = []
for (var id = 0; id < 50; id++) {
  var firstName = faker.name.firstName()
  var lastName = faker.name.lastName()
  var email = faker.internet.email()
  var technology = faker.name.title()
  var company = faker.company.companyName()
  var phoneNumber = faker.phone.phoneNumber()
  var roleId = faker.random.number()
  employees.push({
    "Id": id,
    "Name": firstName,
    "Company": company,
    "Experience": email,
    "Technology": technology,
    "PhoneNumber":phoneNumber,
    "RoleId": roleId
  })
}
console.log(JSON.stringify(employees));


function generateEmployees () {
//   var employees = []
//   for (var id = 0; id < 50; id++) {
//     var firstName = faker.name.firstName()
//     var lastName = faker.name.lastName()
//     var email = faker.internet.email()
//     employees.push({
//       "id": id,
//       "first_name": firstName,
//       "last_name": lastName,
//       "email": email
//     })
//   }
//   console.log(employees);
 // return { "employees": employees }
}
module.exports = generateEmployees