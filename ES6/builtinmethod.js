let salaries = [45000, 50000, 60000, 67000, 72000, 89000, 59000, 55000];

// forEach method

salaries.forEach((values, index, ref) => console.log("index key is "+ index + " and value is = " +values + " and ref is  " + ref));


// find method
let findSalary = salaries.find(salary => salary>50000);
console.log(findSalary)


// filter method
console.log('filter method')
let filterSalary = salaries.filter(salary => salary>50000);
console.log(filterSalary)

salaries.filter(salary => salary>50000).forEach(sal => console.log(sal));

// map
console.log('map method')
let decrementedSalary = salaries.map(salary => salary - 5000);
console.log(decrementedSalary)

salaries.map(salary => salary+5000).forEach(sal => console.log(sal));


// reduce

console.log('reduce method')
let totalSalary = salaries.reduce((prev, curr) => prev+curr);
console.log(totalSalary)