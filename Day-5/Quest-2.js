// Find all possible pairs from a number array which some is zero.



// Algorithm 
// Step-1: Take an object to check num and array to push result.
// Step-2: Loop from starting to the length of array.
// Step-3: Now check if the negative value of the number exists or not if it not exist then assign it in object.
// Step-4: Else push it in the array.

function allPairs(arr)
{
    let obj={};
    let result=[];
    for(let i=0;i<arr.length;i++)
    {
        let num=arr[i];
        if(obj[-num])
        {
            result.push(-num,num)
        }
        else if(obj[num]===undefined)
        {
            obj[num]=true;
        }
    }
    return result;
}


console.log(allPairs([12, 23, -12, 3, -13, -3,13])); // Output: [[-3, 3], [-13, 13]]
