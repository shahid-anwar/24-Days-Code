// String reverse without using inbult function

// Algorithm
// Step-1: Use a for loop to iterate.
// Step-2 Use a resultant variable to store the results.
// We can also use Array.from method to make the str as array and iterate it over forEach.

function resultStr(str)
{
    let resultStr="";
    // for(let i=0;i<str.length;i++)
    // {
    //     resultStr=str[i]+resultStr;
    // }
//   let charArray=Array.from(str)
//     charArray.forEach(char=>
//     {
//         resultStr=char+resultStr;
//     })

    return  resultStr
}

console.log(resultStr("ABCDEFGHIJKLMNOPQRSTUVWXYZ"))