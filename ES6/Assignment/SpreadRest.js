console.log("Spread and Rest Operators");

// copy array using spread 
const arr1 = [1, 2, "test", false];
const arr2 = [...arr1];

console.log(arr2);

// copy object using spread
const obj1 = { name: "John", age: 30 };

const obj2 = {...obj1, marks: 90};
console.log(obj2);

console.log("_____________________________________________");

// using rest operator

function myFruits(a, b, ...morefruits) {
    console.log('a ', a);
    console.log('b ', b);
    console.log('morefruits ', morefruits);
}

myFruits("apple", "banana", "cherry", "greps", "mango", "watermelon");

