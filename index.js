const employee = {
    name: "Gathua",
    streetAddress: "123 Gathua Street",
};
  
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value

    return employee
}

function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee};
    delete newEmployee[key];

    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];

    return employee;
}