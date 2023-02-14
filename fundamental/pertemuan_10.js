// function excelSheet(column) {
//     // jadikan parameter huruf kapital
//     column = column.toUpperCase();

//     // urutan alphabet dalam angka
//     const alphabet = {
//         A: 1,
//         B: 2,
//         C: 3,
//         D: 4,
//         E: 5,
//         F: 6,
//         G: 7,
//         H: 8,
//         I: 9,
//         J: 10,
//         K: 11,
//         L: 12,
//         M: 13,
//         N: 14,
//         O: 15,
//         P: 16,
//         Q: 17,
//         R: 18,
//         S: 19,
//         T: 20,
//         U: 21,
//         V: 22,
//         W: 23,
//         X: 24,
//         Y: 25,
//         Z: 26
//     }

//     // jadikan parameter column menjadi array
//     column = column.split("");
//     let result = 0;
    
//     // loop string length dikalikan dengan 26(panjang alphabet), ditambah urutan huruf terakhir dari column
//     for (let i=0; i<column.length; i++) {
//         result = result * 26 + alphabet[column[i]];
//         console.log(result);
//     }

//     return result;
// }

// console.log(excelSheet("ABA"));




// function findNonDuplicateNumber(arr) {
//     let obj = {};

//     for (let i=0; i<arr.length; i++) {
//         // cek apabila object property dari arr[i] belum ada
//         if (!obj[arr[i]]) obj[arr[i]] = 1;
//         else obj[arr[i]] ++;
//     }

//     // cari object property yang value nya 1, berarti tidak ada yg duplicate
//     for (let key in obj) {
//         if (obj[key] == 1) return parseInt(key);
//     }
// }

// console.log(findNonDuplicateNumber([2, 2, 1, 3, 3, 2]));




// function isAnagram(s, t) {
//     const allowedChars = "abcdefghijklmnopqrstuvwxyz";
    
//     let obj1 = {
//         counter: 0
//     };

//     let obj2 = {
//         counter: 0
//     };

//     for (let i=0; i<s.split("").length; i++) {
//         if (allowedChars.includes(s[i])) {
//             if (!obj1[s[i]]) obj1[s[i]] = 1;
//             else obj1[s[i]] ++;

//             obj1.counter ++;
//         }
//     }

//     for (let i=0; i<t.split("").length; i++) {
//         if (allowedChars.includes(t[i])) {
//             if (!obj2[t[i]]) obj2[t[i]] = 1;
//             else obj2[t[i]] ++;

//             obj2.counter ++;
//         }
//     }

//     if (obj1.counter != obj2.counter) return false;
//     else {
//         delete obj1.counter;
//         delete obj2.counter;
//     }

//     for (let key in obj1) {
//         if (obj1[key] != obj2[key]) return false;
//     }

//     return true;
// }

// console.log(isAnagram("bad credit", "debit card"));




function climbStairs(n) {
    if (n <= 3) return n;

    let a = 1;
    let b = 1;
    let fib;

    for (let i=2; i <= n; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }

    return fib;
}

console.log(climbStairs(6));

// 1 -> 1
// 1

// 2 -> 2
// 1 1
// 2

// 3 -> 3
// 1 1 1
// 1 2
// 2 1

// 4 -> 5
// 1 1 1 1
// 1 1 2
// 1 2 1
// 2 1 1
// 2 2

// 5 -> 8
// 1 1 1 1 1
// 1 1 1 2
// 1 1 2 1
// 1 2 1 1
// 2 1 1 1
// 2 2 1
// 2 1 2
// 1 2 2
