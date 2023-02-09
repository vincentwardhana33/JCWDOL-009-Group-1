// function findIntersectionBetweenTwoObjects(object1, object2) {
//     let result = {};
//     for (let key in object1) {
//         // console.log(`key: ${key}, value: ${object1[key]}`);

//         if (object1[key] === object2[key]) result[key] = object1[key];
//     }

//     return result;
// }

// console.log(findIntersectionBetweenTwoObjects({
//     a: 1,
//     b: 2
// }, {
//     a: 1,
//     c: 3
// }));


function mergeTwoUniqueArray(array1, array2) {
    let result = array1;
    // [
    //     { name: 'Student1', email: 'student1@gmail.com' },
    //     { name: 'Student2', email: 'student2@gmail.com' }
    // ]

    // [
    //     { name: 'Student1', email: 'student1@gmail.com' },
    //     { name: 'Student3', email: 'student3@gmail.com' }
    // ]

    for (let student1 of array1) {
        let isExist = false;
        let tmp;

        for (let student2 of array2) {
            if (JSON.stringify(student1) == JSON.stringify(student2)) {
                isExist = true;
            } else {
                tmp = student2;
            }
        }

        if (!isExist) result.push(tmp);
    }

    return result;
}

console.log(mergeTwoUniqueArray([{
    name: "Student1",
    email: "student1@gmail.com"
},
{
    name: "Student2",
    email: "student2@gmail.com"
}],
[{
    name: "Student1",
    email: "student1@gmail.com"
},
{
    name: "Student3",
    email: "student3@gmail.com"
}]));
