class Employee {
  constructor(empId, empName, empSalary) 
  {
    this.empId = empId;
    this.empName = empName;
    this.empSalary = empSalary;
  }

  getEmpDetails() {
    return `Employee ID: ${this.empId}, Employee Name: ${this.empName}, Employee Salary: ${this.empSalary}`;
  }
}

const employees = [
  new Employee(1, "Ved", 10000),
  new Employee(2, "Williamson", 15000),
  new Employee(3, "Danny", 20000),
  new Employee(4, "John", 85000),
  new Employee(5, "Suraj", 30000),
  new Employee(6, "Raj", 80000),
];

console.log(employees);
console.log("_____________________________________________");
// 1. forEach
console.log("1. Display Array using forEach");
employees.forEach((val) => console.log(val.getEmpDetails()));

console.log("_____________________________________________");
// 2. find method
console.log("2. Find first Employee whose salary > 78000 : find");
employees.find((emp) => {
  if (emp.empSalary > 78000) {
    console.log(
      `${emp.empName} has the salary more than 78000 which is ${emp.empSalary}`
    );
  }
});

console.log("_____________________________________________");
// 3. Filter all Employees whose salary > 78000
console.log("3. Find all Employees whose salary > 78000");
let matchSalariesEmp = employees.filter((emp) => emp.empSalary > 78000);
console.log(matchSalariesEmp)
matchSalariesEmp.forEach((emp) => console.log(emp.getEmpDetails()));

console.log("_____________________________________________");
// 4. Increment salary of every employee by 5000
console.log("4. Increment salary of every employee by 5000 ");

let IncrementSalariedEmp = employees.map((emp) => emp.empSalary + 5000);

console.log(IncrementSalariedEmp);

console.log("_____________________________________________");
// 5. Display sum of salary of all employees
console.log("4. Display sum of salary of all employees");

let totalSalariedEmp = employees.reduce((acc, emp) => acc + emp.empSalary, 0);

console.log(totalSalariedEmp);

console.log("_____________________________________________");