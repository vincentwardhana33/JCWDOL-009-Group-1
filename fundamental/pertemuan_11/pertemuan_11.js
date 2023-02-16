// let result;

// function greet(str) {
//     result = str;
// }

// function hello() {
//     greet('hello');
// }

// function arigatou() {
//     greet('arigatou');
// }

// arigatou();
// hello();
// console.log(result);


// function calculator(a, b) {
//     return a + b;
// }

// function displayer(something) {
//     console.log(something);
// }

// let result = calculator(5, 5);
// displayer(result);



// function calculator(a, b) {
//     let result = a + b;
//     displayer(result);
// }

// function displayer(something) {
//     console.log(something);
// }

// calculator(5, 5);



// function calculator(a, b, callback) {
//     callback(a + b);
// }

// function displayer(something) {
//     console.log(something);
// }

// calculator(5, 5, displayer);



// asynchronous / NON-blocking example
// console.log('a');
// setTimeout(message, 3000);
// console.log('b');
// function message() {
//     console.log('asynchronous');
// }



// const tryPromise = new Promise((resolve, reject) => {
//     let isError = false;
//     if (isError) reject("contoh error");

//     resolve("contoh sukses");
// })

// tryPromise.then((result) => {
//     console.log(result);
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     console.log('finally done');
// });

// console.log(tryPromise);





// const tryPromise = new Promise((resolve, reject) => {
//     let isError = false;
//     if (isError) reject("error message");

//     resolve("result sukses");
// })

// const asyncAwait = async () => {
//     // console.log('satu');

//     await tryPromise
//     .then((result) => {
//         throw 'error di then pertama';
//     })
//     .then(() => {
//         console.log('then kedua');
//     })
//     .catch((err) => {
//         console.error(`masuk catch, Error: ${err}`);
//     })
//     .finally(() => {
//         console.log('finally done');
//     })
//     // console.log('dua');
// }

// asyncAwait();


// function test() {
//     try {
//         let isError = false;

//         if (isError) throw "error message";

//         console.log('ini message setelah throw');
//     } catch(err) {
//         // skenario apabila error
//         console.log(err);
//     }
// }

// test();



// let obj = {
//     name: "Vincent",
//     age: 70
// }

// // mengubah dari tipe data object menjadi JSON
// obj = JSON.stringify(obj);
// console.log(obj);

// // mengubah dari tipe data JSON menjadi object
// obj = JSON.parse(obj);
// console.log(obj);


// let array = [{
//     name: "Vincent",
//     age: 70
// }, {
//     name: "Yanto",
//     age: 50
// }];
// array = JSON.stringify(array);
// console.log(array);



// const test = require('./test');

// console.log(test.bio);
// test.display();


const {bio, display} = require('./belajar_export');
console.log(bio);
display();