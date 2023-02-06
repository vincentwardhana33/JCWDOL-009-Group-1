// exercise slide 4 and 5


// function createTriangle(height) {
//     let result = '';
//     let counter = 1;
//     let highestNumber = 0;

//     for (var i=1; i<=height; i++) {
//         highestNumber += i;
//     }

//     for (var i=0; i<height; i++) {
//         for (var j=0; j<i+1; j++) {
//             let zeroes = '';
//             if (counter.toString().length < highestNumber.toString().length) {
//                 for (var k=0; k<(highestNumber.toString().length - counter.toString().length); k++) {
//                     zeroes += `0`;
//                 }
//             }

//             result += ` ${zeroes}${counter} `;
//             counter ++;
//         }

//         result += '\n';
//     }

//     return result;
// }

// console.log(createTriangle(4));


// function FizzBuzz(n) {
//     for (var i=1; i<=n; i++) {
//         if (i % 3 == 0 && i % 5 == 0) console.log(`${i} FizzBuzz`);
//         else if (i % 3 == 0) console.log(`${i}: Fizz`);
//         else if (i % 5 == 0) console.log(`${i} Buzz`);
//     }
// }

// FizzBuzz(15);


// function calculateBodyMassIndex(weight, height) {
//     const bmi = weight / Math.pow(height, 2);

//     if (bmi < 18.5) return "less weight";
//     else if (bmi >= 18.5 && bmi < 25) return "ideal";
//     else if (bmi >= 25 && bmi < 30) return "overweight";
//     else if (bmi >= 30 && bmi <= 39.9) return "very overweight";
//     else if (bmi > 39.9) return "obesity";
// }

// console.log(calculateBodyMassIndex(70, 1.5));


// function removeAllOddNumbersFromArray(array) {
//     let result = [];
//     for (var i=0; i<array.length; i++) {
//         if (array[i] % 2 == 0) {
//             result.push(array[i]);
//         }
//     }

//     return result;
// }

// console.log(removeAllOddNumbersFromArray([1, 2, 3, 4, 5, 6, 7]));


// function splitStringIntoArray(string) {
//     return string.split(' ');
// }

// console.log(splitStringIntoArray('Hello World'));



// function getLowestHighestAverageWithSort(array) {
//     array = array.sort();
//     array.sort((a, b) => a - b);
//     console.log(`lowest: ${array[0]}`);
//     console.log(`highest: ${array[array.length - 1]}`);

//     let sum = 0;
//     for (var i=0; i<array.length; i++) {
//         sum += array[i];
//     }

//     console.log(`average: ${sum / array.length}`);
// }

// getLowestHighestAverageWithSort([5, 2, 7, 10, 1, 6]);



// function getLowestHighestAverageWithoutSort(array) {
//     let smallest = array[0];
//     let highest = array[0];

//     for (var i=1; i<array.length; i++) {
//         if (array[i] < smallest) smallest = array[i];
//         else if (array[i] > highest) highest = array[i];
//     }

//     console.log(`smallest ${smallest}`);
//     console.log(`highest ${highest}`);

//     let sum = 0;
//     for (var i=0; i<array.length; i++) {
//         sum += array[i];
//     }

//     console.log(`average: ${sum / array.length}`);
// }

// getLowestHighestAverageWithoutSort([5, 2, 7, 10, 1, 6]);


// input:
// ['orange', 'apple', 'mango', 'banana', 'papaya'];
// output: 
// orange, apple, mango, banana and papaya

// function concatenateArraytoString(array) {
//     let result = array[0];

//     for (var i=1; i<array.length; i++) {
//         if (i < array.length - 1) result += `, `;
//         else result += ` and `;

//         result += array[i];
//     }

//     return result;
// }

// console.log(concatenateArraytoString(['orange', 'apple', 'mango', 'banana', 'papaya']));



// function calculateSameIndexofArray(array1, array2) {
//     let result = [];

//     for (var i=0; i<array1.length; i++) {
//         result[i] = array1[i] + array2[i];
//     }

//     return result;
// }

// console.log(calculateSameIndexofArray([1, 2, 3], [3, 2, 1]));



// function addElementToEndofArray(element) {
//     let array = ['orange', 'apple', 'mango', 'banana', 'papaya'];
//     let isExist = false;

//     for (var i=0; i<array.length; i++) {
//         if (element === array[i]) isExist = true;
//     }

//     if (!isExist) array.push(element);

//     return array;
// }

// console.log(addElementToEndofArray('watermelon'));

