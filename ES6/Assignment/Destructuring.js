console.log('Destructuring Array and objects');
// array
let userDetail = [1, "John", 24, "US", "john@gmail.com"];

let [id, name, age, country, email] = userDetail;

console.log('userId - ' + id);
console.log('userName - ' + name);
console.log('userAge - ' + age);
console.log('userCountry - ' + country);
console.log('userEmail - ' + email);

console.log("_____________________________________________");

// object
let productDetail = {
    proId: 1,
    proName: "Mobile",
    price: 1000,
    discount: 10,
    rating: 4.5
};

let {proId, proName, price, discount, rating} = productDetail;

console.log('proId - ' + proId);
console.log('proName - ' + proName);
console.log('price - ' + price);
console.log('discount - ' + discount);
console.log('rating - ' + rating);

console.log("_____________________________________________");