let employee = {
    employeeId: 101,
    firstName: "Ali",
    lastName: "Khan",
    department: "IT",
    designation: "Frontend Developer",
    salary: 75000
};

console.log( employee.firstName);
console.log( employee.department);

console.log(employee["designation"]);
console.log( employee["salary"]);

employee.email = "ali@example.com";
employee.salary = 85000;
delete employee.lastName;

console.log("Final Employee Record:", employee);