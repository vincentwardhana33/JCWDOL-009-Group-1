let array = [1, '2', 3.123, '4', 5];
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);
console.log(array);


// let array = [['A', 'B', 'C', ['!', '@']], 1, 2, 3, 4, 5];
// console.log(array[0][3][1]);

// const array = ['A', 'B', 'C'];
// const array2 = [1, 2, 3];
// const array3 = ['!', '@', '#'];

// console.log(array.lastIndexOf('A', 2));

// console.log(array.concat(array2).concat(array3));
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 1, "Lemon", "Kiwi");
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus);

// let array = [5, 2, 1, 7, 10];
// array = array.reverse();
// console.log(array);

// const array = ['A', 'B', 'C'];
// for (var i=0; i<array.length; i++) {
//     console.log(array[i]);
// }

// const array1 = ['a', 'b', 'c'];
// array1.forEach((element, i) => {
//     console.log(element)
//     console.log(i)
// });

// let numbers = [4, 9, 16, 25];
// numbers = numbers.map(Math.sqrt);
// console.log(numbers)
// console.log(numbers.find());

// Input array contain some elements.
// var array = [-10, 0.20, -0.30, 40, -50];
  
// // Method (return element > 0).
// var found = array.find(function (element) {
//     return element > 0;
// });

// // Printing desired values.
// console.log(found);


// const string = 'aku suka makan nasi goreng';
// console.log(string.indexOf('nasi goreng'));


// const array = [1, 2];
// const n = 7;
// for (var i=0; i<7; i++) {
//     if (i < 2) console.log(array[i]);
//     else {
//         array[i] = array[i - 1] + array[i - 2];
//         console.log(array[i]);
//     }
// }


// const biodata = {
//     nama: "Vincent",
//     usia: 70,
//     alamat: "Taman kebon jeruk"
// }

// console.log(biodata.alamat);
// console.log(biodata["alamat"]);

const biodataArray = [
    {
        nama: "Vincent",
        usia: 70,
        alamat: "Taman kebon jeruk"
    }, {
        nama: "Joko",
        usia: 50,
        alamat: "Jl. Jendral Sudirman"
    }
];

console.log(biodataArray);