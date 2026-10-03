let employee = {
    employeeId: 101,
    firstName: "Ali",
    lastName: "Khan",
    department: "IT",
    designation: "Frontend Developer",
    salary: 85000,
    getFullName: function () {
        return this.firstName + this.lastName;
    },

    getEmployeeInfo: function () {
        return "Employee ID: " + this.employeeId +  "Department: " + this.department;
    }
};

console.log(employee.getFullName());
console.log(employee.getEmployeeInfo());

let employee2 = {
    employeeId: 102,
    firstName: "Sara",
    lastName: "Ahmed",
    department: "HR",
    designation: "HR Manager",
    salary: 95000,

    getFullName: function () {
        return this.firstName + this.lastName;
    },

    getEmployeeInfo: function () {
        return "Employee ID: " + this.employeeId + "Department: " + this.department;
    }
};

console.log(employee2.getFullName());
console.log(employee2.getEmployeeInfo());