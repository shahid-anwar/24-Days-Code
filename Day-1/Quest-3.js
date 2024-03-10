// Remove Duplicate characters from array of element using filter.

// Algorithm

// Step-1: Take an array as input. 
// Step-2: Check the condition in the filter and using Array.indexOf.


function removeDup(array)
{
    let resultArr=array.filter((char,index,resArr)=>
    {return resArr.indexOf(char)==index})
    return Array.from(resultArr);
}

console.log(removeDup(["S","h","a","h","i","d"]))