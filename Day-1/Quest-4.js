// String reverse without reversing of individual words (Array of elements can be reverse 
// with reverse() method but for string it is won't possible so required to split and then join.\
// Example:"The Sky is Blue" 
// Output: "Blue is Sky The"

// Algorithm

// Step-1: Take a string as input
// Step-2: We have to split and then add to reverse the individual words


function reverseWords(str)
{
    let splitStr=str.split(" ");
    let resultStr="";
    for(let i=splitStr.length-1;i>=0;i--)
    {
        resultStr+=" "+splitStr[i];
    }
    return resultStr;
}


console.log(reverseWords("The Sky is Blue"))