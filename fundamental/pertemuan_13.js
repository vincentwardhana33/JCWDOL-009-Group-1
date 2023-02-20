// Write a code to check whether the date is a weekend.
// function isDateWeekend(date) {
//     const newDate = new Date(date);
//     if (newDate.getDay() == 0 || newDate.getDay() == 6) {
//         return true;
//     }

//     return false;
// }

// console.log(isDateWeekend('2023-02-19'));



// Write a code to find GCD of two numbers → use while.
// function findGCD(a, b) {
//     while(a != b){
//         if(a > b) {
//             a -= b;
//         }
//         else {
//             b -= a;
//         }
//     }
//     return a;
// }

// console.log(findGCD(36, 60));



// Write a code to find LCM of two numbers → use do ... while.
// function findLCM(a, b) {
//     let min = Math.min(a, b);
//     let max = Math.max(a, b);
//     let result = max;
  
//     do {
//         result += max;
//     } while (result % min !== 0);
  
//     return result;
//   }

// console.log(findLCM(5, 8));



// Write a code to find most common character from a string
// function findMostCommonCharacterFromString(string) {
//     let charObj = {};
//     let counter = 0;
//     let result = '';

//     for (let c of string) {
//         if (charObj[c]) {
//             charObj[c] ++;
//         } else {
//             charObj[c] = 1;
//         }
//     }

//     for (let c in charObj) {
//         if (charObj[c] > counter) {
//             counter = charObj[c];
//             result = c;
//         }
//     }

//     return result;
// }

// console.log(findMostCommonCharacterFromString("hello world"));



// Write a code to sort a string alphabetically (with sort function)
// function sortStringWithSortFunction(string) {
//     return string.split("").sort().join("");
// }

// console.log(sortStringWithSortFunction("hello world"));



// Write a code to sort a string alphabetically (without sort function)
// function sortStringWithoutSortFunction(string) {
//     let result = '';
//     let arr = string.split('');
  
//     for (let i=0; i<arr.length; i++) {
//         let minChar = arr[i];
//         let minIndex = i;
    
//         for (let j=i+1; j<arr.length; j++) {
//             if (arr[j] < minChar) {
//                 minChar = arr[j];
//                 minIndex = j;
//             }
//         }
    
//         arr[minIndex] = arr[i];
//         arr[i] = minChar;
//         result += minChar;
//     }
  
//     return result;
// }

// console.log(sortStringWithoutSortFunction("hello world"));



// Write a code to get minimum date from array of dates.
// function getMinDate(arr) {
//     let minDate = arr[0];
  
//     for (let i=1; i<arr.length; i++) {
//         if (arr[i] < minDate) {
//             minDate = arr[i];
//         }
//     }
  
//     return minDate;
// }

// console.log(getMinDate(['2023-02-20', '2022-09-25', '2024-10-10']));



// Write a code that calculates the sum of all elements of a two-dimensional array
// function sumTwoDimensionalArray(arr) {
//     let result = 0;
  
//     for (let i=0; i<arr.length; i++) {
//         for (let j=0; j<arr[i].length; j++) {
//             result += arr[i][j];
//         }
//     }
  
//     return result;
// }

// console.log(sumTwoDimensionalArray([[1, 2], [3, 4], [5, 6]]));



// Write a code to find the longest common prefix string amongst an array of strings.
// function findLongestCommonPrefix(arr) {
//     if (arr.length === 0) {
//       return "";
//     }
  
//     let result = arr[0];
  
//     for (let i=1; i<arr.length; i++) {
//         while (arr[i].indexOf(result) !== 0) {
//             result = result.slice(0, result.length - 1);

//             if (result.length === 0) return "";
//         }
//     }
  
//     return result;
// }

// console.log(findLongestCommonPrefix(["flower", "flight", "flexing"]));



// Write a code that copies the first half of an array. With an odd number of array elements, the
// middle element should belong to the first half
// function copyFirstHalfOfArray(arr) {
//     let midIndex = Math.floor(arr.length / 2);
//     let endIndex = arr.length % 2 === 0 ? midIndex : midIndex + 1;

//     return arr.slice(0, endIndex);
// }

// console.log(copyFirstHalfOfArray([1, 2, 3, 4, 5, 6, 7]));



// Write a code to get the number of days in a month
// Example : month = 1, year = 2022 → 31
// function getDaysInMonth(year, month) {
//     return new Date(year, month, 0).getDate();
// }

// console.log(getDaysInMonth(2022, 1));



// Write a code to count the number of days passed since beginning of the year
// function countDaysPassedSinceBeginningOfYear(date) {
//     date = new Date(date);
//     let year = date.getFullYear();
//     let beginningOfYear = new Date(year, 0, 1);
//     let oneDay = 1000 * 60 * 60 * 24;
//     let daysPassed = Math.floor((date - beginningOfYear) / oneDay) + 1;

//     return daysPassed;
// }

// console.log(countDaysPassedSinceBeginningOfYear("2023-02-20"));



// Write a code to calculate age
// function calculateAge(dateOfBirth) {
//     let now = new Date();
//     let currentYear = now.getFullYear();
//     let currentMonth = now.getMonth() + 1;
//     let currentDate = now.getDate();
//     let yearGap = currentYear - dateOfBirth.split('-')[0];

//     let birthMonth = parseInt(dateOfBirth.split('-')[1]);
//     let birthDate = parseInt(dateOfBirth.split('-')[2]);

//     if (currentMonth < birthMonth) yearGap --;
//     else if (currentMonth == birthMonth) {
//         if (currentDate < birthDate) yearGap --;
//     }

//     return yearGap;
// }

// console.log(calculateAge("2000-02-20"));
