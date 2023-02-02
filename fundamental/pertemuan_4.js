// soal di akhir slide

// // Palindrome
// let string = "katak";
// let array = string.split('');
// console.log(array);

// let secondPointer = array.length - 1;
// let isPalindrome = true;
// for (var i=0; i<Math.floor(array.length / 2); i++) {
//     if (array[i] != array[secondPointer]) {
//         isPalindrome = false;
//         break;
//     }

//     secondPointer --;
// }

// console.log(isPalindrome);


// // Currency IDR (thousand seperator)
// let nominal = 1000000;
// let array = nominal.toString().split('');
// let counter = 0;
// let result = '';

// for (var i=array.length-1; i>=0; i--) {
//     result += array[i];
    
//     counter ++;
//     if (counter == 3) {
//         result += '.';
//         counter = 0;
//     }
// }

// result = result.split('');
// if (result[result.length - 1] == '.') result.pop();
// result = result.reverse();
// result = result.join('');
// result = `Rp. ${result},00`;
// console.log(result);







// materi function

// function multiply(a, b) {
//     return a * b;
// }

// let result = multiply(3, 5);
// console.log(result);


// function biodata(nama, usia, alamat) {
//     if (!nama) return "nama harus diisi.";
//     if (!usia) return "usia harus diisi.";
//     if (!alamat) return "alamat harus diisi.";

//     return {
//         nama,
//         usia,
//         alamat
//     }
// }

// let result = biodata("Vincent", 70, "Taman kebon jeruk");
// console.log(result);


// function thousandSeperator(nominal=1000) {
//     let array = nominal.toString().split('');
//     let counter = 0;
//     let result = '';

//     for (var i=array.length-1; i>=0; i--) {
//         result += array[i];
        
//         counter ++;
//         if (counter == 3) {
//             result += '.';
//             counter = 0;
//         }
//     }

//     result = result.split('');
//     if (result[result.length - 1] == '.') result.pop();
//     result = result.reverse();
//     result = result.join('');

//     return `Rp. ${result},00`;
// }

// console.log(thousandSeperator(1000));
// console.log(thousandSeperator(10000));
// console.log(thousandSeperator(100000));

// console.log(thousandSeperator());


// function myFunction(a, b, ...manyArgs) {
//     console.log(a);
//     console.log(b);
//     console.log(manyArgs);
// }

// myFunction(1, 2, 3, 4, 5);


// // nested function
// function welcomingMessage(firstName, lastName) {
//     function joinName(firstName, lastName) {
//         return `${firstName} ${lastName}`;
//     }

//     function welcome() {
//         return `Welcome, ${joinName(firstName, lastName)}`;
//     }

//     return welcome();
// }

// let result = welcomingMessage("Vincent", "Wardhana");
// console.log(result);


// function decrement(n) {
//     if (n > 0) {
//         console.log(n);
//         n --;
//         decrement(n);
//     }
// }

// decrement(5);



// const square = (n) => {
//     return n * n;
// }

// console.log(square(5));



// let result = parseFloat('1.123');
// console.log(typeof(result));

// console.log(5 * 'a');
// console.log(isNaN(5 * 'a'));
// console.log(isNaN(5 * 3));
// console.log(NaN == isNaN());
