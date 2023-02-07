// let user = {
//     name: "Vincent",
//     address: {
//         street: "Jl. Kebayoran Baru",
//         city: "Jakarta"
//     }
// }

// user.greet = function() {
//     console.log("Hello World");
// }
// user.greet();

// console.log(user.product?.price);


// for (let userKey in user) {
//     console.log(user[userKey]);
// }

// for (let addressKey in user["address"]) {
//     console.log(user["address"][addressKey]);
// }

// user.address.street
// user["address"][addressKey]



// let user = {
//     firstName: "Vincent",
//     lastName: "Wardhana",
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
//     set fullName(value) {
//         const splitValue = value.split(" ");
//         this.firstName = splitValue[0];
//         this.lastName = splitValue[1];
//     }
// }

// user.fullName = "Alice Cooper";

// console.log(user.fullName);


// let a, b;
// [a, b] = [1, 2];

// // equivalen dengan
// // a = 1;
// // b = 2;

// console.log(a);
// console.log(b);


// const dataOne = [1, 2, 3];
// const dataTwo = [4, 5, 6];
// const finalDataList = [...dataOne, ...dataTwo];
// console.log(finalDataList);

// const objectOne = {
//     name: "Vincent"
// }

// const objectTwo = {
//     email: "vincentwardhana33@gmail.com"
// }

// const finalObject = {
//     ...objectOne,
//     ...objectTwo
// }

// console.log(finalObject);


// const user = {
//     firstName: "Joko",
//     lastName: "Herman"
// }

// const user = {
//     firstName: "Vincent",
//     lastName: "Wardhana",
//     fullName() {
//         return `${user.firstName} ${user.lastName}`
//     }
// }

// console.log(user.fullName());




// const user1 = {
//     name: "Vincent"
// }

// const user2 = {
//     name: "Vincent"
// }

// console.log(user1 == user2);



// class User {
//     greeting() {
//         console.log("Hello World");
//     }
// }
// const user = new User();
// user.greeting();



// const User = class {
//     greeting() {
//         console.log("Hello World");
//     }
// }

// const user = new User();
// console.log(user.greeting());


// class User {
//     constructor(name="") {
//         this.name = name;
//     }

//     greeting() {
//         console.log("Hello World");
//     }
// }

// const user = new User("Vincent");
// user.greeting();
// console.log(user.name);



// class User {
//     name;
//     #email;

//     constructor(name, email) {
//         this.name = name;
//         this.#email = email;
//     }

//     getEmail() {
//         return this.#email;
//     }
// }

// const user = new User("Vincent", "vincentwardhana@gmail.com");
// console.log(user.name);
// console.log(user.getEmail());




// class Product {
//     constructor() {
//         this.productName;
//         this.#price;
//     }

//     setProduct(productName, price) {
//         this.productName = productName;
//         this.#price = price;
//     }
// }

// class Book extends Product {
//     constructor() {
//         super();
//         this.author;
//     }

//     getAuthor() {
//         return this.author;
//     }

//     setAuthor(authorName) {
//         this.author = authorName;
//     }
// }

// const book = new Book();
// book.setAuthor("J.K Rowling");
// book.setProduct("Harry Potter", 100000);
// // console.log(book.author);
// // console.log(book.productName);
// console.log(book.price);


// class Contoh extends Book {
//     constructor() {
//         super();
//     }
// }


// const user = {
//     name: "Vincent",
//     age: 70,
//     address: "Taman kebon jeruk"
// }

// for (let key in user) {
//     console.log(`key: ${key}, key value: ${user[key]}`);
// }

// console.log(user["name"])
// console.log(user["age"])
// console.log(user["address"])


// const array = [1, 2, 3];
// for (let val of array) {
//     console.log(val);
// }


