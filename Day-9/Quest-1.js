// To find unique values from 2 arrays and keep into one array. i.e. Union.

// To find unique values from 2 arrays and keep into one array. i.e. Union

// Ex-
// let arr1=[1,2,3,4,5]
// // 
// let arr2=[4,5,6,7,8,9]

// unique values from array =[1,2,3,6,7,8,9]

// Algorithm
// Iterate over the arrays if value is same dont push otherwise push in new array.


function union(arr1, arr2) {
    let uniqueArr = [];

    // Store unique values from arr1
    let uniqueValues = new Set(arr1);

    // Add unique values from arr2 to uniqueArr
    for (let val of arr2) {
        if (!uniqueValues.has(val)) {
            uniqueArr.push(val);
        }
    }

    // Add remaining unique values from arr1 to uniqueArr
    for (let val of uniqueValues) {
        uniqueArr.push(val);
    }

    return uniqueArr;
}
// Output: [1, 2, 3, 6, 7, 8, 9]


let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8, 9];
console.log(union(arr1, arr2)); // Output: [1, 2, 3, 6, 7, 8, 9]
