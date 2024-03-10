// Remove Duplicate characters from array of element and find the count of an elements using set

// Algorithm

// Step-1: Use a set to find the unique characters.
// Step-2: Use an array to store the set.
// Step-3: Take an object to store the elementcount.
// Step-4: Return 


function removeDuplicatesAndCount(array) 
{
   let uniqueElement=new Set(array);
   
   let uniqueArray=Array.from(uniqueElement);
   
   let elementCount={};
   array.forEach(element=>
   {
       elementCount[element]=(elementCount[element]||0)+1
   })
    return {
        uniqueArray:uniqueArray,elementCount:elementCount
    }
}

// Example usage:
let inputArray = ["a", "b", "a", "c", "b", "d", "e", "a"];
let result = removeDuplicatesAndCount(inputArray);

console.log("Unique Array:", result.uniqueArray);
console.log("Element Count:", result.elementCount);

