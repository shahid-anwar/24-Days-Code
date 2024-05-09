// Find first duplicate element from an array

// Algorithm
// Step-1: Take an object and check if there is any duplicates or not.
// Step-2: If there is any duplicate return immediately
// Step-3: If there is no duplicate simply add that value in array.
function findDuplicate(arr) {
    let obj = {};

    for (let i = 0; i <= arr.length-1; i++) {
        if (obj[arr[i]]) {
            return arr[i]; // Found the first duplicate, return it
        } else {
            obj[arr[i]] = true;
        }
    }

    // If no duplicates found, return null or any other appropriate value
    return null;
}

console.log(findDuplicate([2, 3, 4, 5,2,3])); // Output: 2
