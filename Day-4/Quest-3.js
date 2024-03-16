// To find vowels and its count in a given string



// Algorithm
// Step-1: First find the vowels from the string.
// Step-2: If it exists add it in an object and increase the count.
// Step-3: If does not exist then just add with count 1.
// Step-4: Return  the object. 

function countVowels(str) {
    let result = {};
    let strlower = str.toLowerCase();

    for (let i = 0; i < strlower.length; i++) {
        let char = strlower[i];

        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            result[char]=result[char]?result[char]+1:1;
            }
        
    }

    return result;
}

console.log(countVowels("aiaioiuau")); 
