// Create a function called invalidEmployees to filter out 
// employees having null value for a key 

const sampleEmployees = [{
  "id": 1,
  "employee_name": "Milena",
  "employee_email": "milena@company.org",
  "employee_number": null,
  "employee_id": "3056804574"
}, {
  "id": 2,
  "employee_name": "Anthia",
  "employee_email": "anthia@company.org",
  "employee_number": "745-430-6346",
  "employee_id": "8910054654"
}, {
  "id": 3,
  "employee_name": "Elissa",
  "employee_email": "elissa@company.org",
  "employee_number": "293-415-1928",
  "employee_id": "3753565938"
}, {
  "id": 4,
  "employee_name": "Hortensia",
  "employee_email": "hortensia@company.org",
  "employee_number": "141-807-0169",
  "employee_id": null
}, {
  "id": 5,
  "employee_name": "Marcelline",
  "employee_email": "marcelline@company.org",
  "employee_number": null,
  "employee_id": "0780303520"
}, {
  "id": 6,
  "employee_name": "Colby",
  "employee_email": null,
  "employee_number": "495-893-8853",
  "employee_id": "3011385777"
}]

const employeeWithMissingInformation = (employee) => {
   for(const key in employee){
    if(employee[key] === null){
      return true;
    }
   }
   return false;
};

const invalidEmployees = (employees) => {
  //Implement me
  const invalidEmployeesArr = [];
  for(const employee of employees){
    if(employeeWithMissingInformation(employee)){
       invalidEmployeesArr.push(employee);
    }
  }
  return invalidEmployeesArr;
}

// We can create new array using following approach but above approach is 
// easier one
// const invalidEmployees = (employees) => {
//   const invalidEmployeesArr = [];
//    for(const employee of employees){
//       for(const key in employee){
//         if(employee[key] === null){
//           invalidEmployeesArr.push(employee);
//         }
//       }
//    }
//    return invalidEmployeesArr;
// }

// Extracting names of employees from employees array 
const invalidEmployeeNames = (employees) => {
    const invalidEmployeesList = invalidEmployees(employees);
    const names = invalidEmployeesList.map(employee => employee.employee_name);
    return names;
}
console.log(invalidEmployees(sampleEmployees));
console.log(invalidEmployeeNames(sampleEmployees));