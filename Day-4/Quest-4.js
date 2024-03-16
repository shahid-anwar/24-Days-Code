// To find character occurance from the string

// Algorithm
// Step-1: Loop through the string 
// Step-2: Take a result object and wrrite a condition 
// Step-3: If the character is already present then increase count else just set the count as 1.

function charOccur(str) {
    let result = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i]; 
      if (char !== ' ') {
            result[char] = result[char] ? result[char] + 1 : 1;
        }
    }
    return result;
}

console.log(charOccur("ShahidAnwar Ansari"));
