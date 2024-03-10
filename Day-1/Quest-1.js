// Remove Duplicate characters from String

// Algorithm 
// Step-1: Iterate through the string 
// Step-3: Store values in a data and check if its there or not using the index ==-1.
// Step-4: If its not there then add in the resultant string else dont add.

// Using String

// function removeDuplicate(str)
// {
//     let resultStr="";
//     for(let i=0;i<str.length;i++)
//     {
//         if(str[i]!==" " && resultStr.indexOf(str[i])===-1)
//         resultStr+=str[i]
//     }
//     return resultStr;
// }

// Using Array

// function removeDuplicate(str)
// {
//     let resultStr=[];
//     for(let i=0;i<str.length;i++)
//     {
//         if(str[i]!==" " && resultStr.indexOf(str[i])===-1)
//         resultStr.push(str[i])
//     }
//       return resultStr;
// }

// Using Object

function removeDuplicate(str)
{
    let resultStr={};
     for(let i=0;i<str.length;i++)
    {
        if(str[i]!==" ")
        resultStr[str[i]]=true
    }
    return Object.keys(resultStr)
}
console.log(removeDuplicate("Shahid"))