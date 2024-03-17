// To find a first pair from a number array whose sum is zero
// To find a first pair from a number array whose sum is zero
// Algorithm
// Step-1: Loop from start to end.
// Step-2: Take another inner loop from i+1 to the length.
// Step-3: If it finds the pair return from there only else return.

// function firstPair(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
        
//         for (let j = i + 1; j < arr.length; j++) {
       
//             if (arr[i] + arr[j] === 0) {
                
//                 result.push(arr[i], arr[j]);
//                 return result;
//             }
//         }
//     }
//     return result;
// }

// console.log(firstPair([12, 23, -12, 3, -3])); // Output: [-12, 12]



// Optimized Apprach using 1 loop and object

function firstPair(arr)
{
    let obj={};
    for(let i=0;i<arr.length;i++)
    {
        let num=arr[i]
        if(obj[-num])
        {
            return [num,-num]
        }
        obj[num]=true;
    }
    return [];
}

console.log(firstPair([12,23,12,3,-13,-3]))