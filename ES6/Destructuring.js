let arr = [45, "NeoSoft", true, 55000];

let [num, cname, status, budget] = arr;

console.log('Destructuring array')
console.log(num);
console.log(cname);

console.log('---------------');

let obj = {
    name: "NeoSoft",
    city: "Pune",
};

let {name, city} = obj;
console.log(name);
console.log(city);