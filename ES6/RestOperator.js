function add(...nums) {
    return nums.reduce((acc,num) => acc + num);   
}

console.log('RestOperator');

console.log(add(3,4));
console.log(add(4));
console.log(add(3,4,5));
console.log(add(5,6,7,8));


console.log('Spread Operator');

let studentObj = {
    id: 2,
    name: 'John',
    age: 20,
    marks: 80
};

const newObj = {...studentObj};
console.log(newObj);

// rename the key 
let {id,name,age,marks} = {...studentObj};

const renamedKeyObj = {
    studentId:id,
    studentName: name,
    studentAge: age,
    studentMarks: marks
}

console.log(renamedKeyObj);
//studentObj = {...renamedKeyObj}
//console.log(studentObj);