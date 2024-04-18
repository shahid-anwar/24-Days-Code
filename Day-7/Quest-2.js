// Finding a missing elements in an array and then add with existing elements.
//  (-1 means if elements not found then it will return always -1 as per rule)

/* Algorithm 
Step-1: First iterate and find the diff between all elements.
Step-2: Iterate from 1 to the difference if its more than 1
Step-3: Push all the elements in the array and return 
*/


function missingElements(arr) {
    let sum = [];
    
    for(let i=0;i<arr.length-1;i++)
    {
        let diff=arr[i+1]-arr[i]
        for(let j=1;j<diff;j++)
        {
            sum.push(arr[i]+j)
        }
    }
    return sum.length!==0?sum:-1
}

const arr = [1, 2, 3, 6, 10,15];
console.log(missingElements(arr)); // Output: [4, 5, 7, 8, 9] (since 4, 5, 7, 8, 9 are missing)
