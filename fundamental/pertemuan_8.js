// function reverseObjectPropertyandValue(array) {
//     let result = [];
//     for (let user of array) {
//         let tmp = {};
//         for (key in user) {
//             tmp[user[key]] = key;
//         }

//         result.push(tmp);
//     }
    
//     return result;
// }

// console.log(reverseObjectPropertyandValue([{
//     name: "David",
//     age: 20
// }, {
//     name: "Vincent",
//     age: 70
// }]));


// recursive function
// asumsi nilai n selalu >= 0
// asumsi nilai n selalu number

// 5x4x3x2
// 120

// result = 5x4 20
// result = 20 * 3 60
// result = 60 * 2 120

// function factorialNumber(n, result=n) {
//     if (n <= 1) return 1;

//     n--;
//     result = result * (n);
    
//     if (n > 1) {
//         return factorialNumber(n, result);
//     }
    
//     return result;
// }

// console.log(factorialNumber("5"));




// let array = ["banana", "apple", "jackfruit", "apple"];
// const setFruits = new Set(array);

// setFruits.add("orange");
// setFruits.delete("jackfruit");
// console.log(setFruits);
// console.log(setFruits.has("apple"));
// // setFruits.clear()
// // console.log(setFruits);
// console.log(setFruits.size);
// // console.log(setFruits.entries());

// setFruits.forEach(element => {
//     console.log(element);
// });

// array = [...setFruits];
// console.log(array);



// let hotelRooms = {};
// hotelRooms["100"] = null;
// hotelRooms["101"] = null;
// hotelRooms["102"] = null;
// hotelRooms["201"] = null;
// hotelRooms["202"] = null;
// hotelRooms["203"] = null;
// hotelRooms["301"] = null;
// hotelRooms["302"] = null;
// hotelRooms["303"] = null;

// // console.log(hotelRooms);
// console.log(hotelRooms["301"]);
// hotelRooms["301"] = {
//     name: "Vincent"
// }

// console.log(hotelRooms["301"]);



// guestList["123"] = 301;

let guestList = {};
function checkIn(nik, roomNumber) {
    if (guestList[nik] == undefined) {
        guestList[nik] = roomNumber;
    } else {
        let arr = [];
        arr[0] = guestList[nik];
        arr.push(roomNumber);
        guestList[nik] = arr;
    }

    // console.log(guestList);
}

checkIn("123", 101);
checkIn("123", 102);

console.log(guestList["123"]);


// let obj = {
//     David: '001',
//     Buchanan: '002'
// }

const myMap = new Map();
// set untuk memasukan object kedalam Set
myMap.set("David", "001");
myMap.set("Buchanan", "002");

// for (let [key, value] of myMap) {
//     console.log(`${key} = ${value}`);
// }

// get untuk mencari object property dalam Set
// equivalen dengan myMap["David"] pada object
// console.log(myMap.get("Buchanan"));
