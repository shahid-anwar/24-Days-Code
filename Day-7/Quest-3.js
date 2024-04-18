
// Find the missing number from an array

/* 

Algorithm

Step-1: Iterate upto 1 less than the length of the array.
Step-2: Check if the value of the curent element +1 = value of the next element or not.
Step-3: Push the missing element in an array and return.

*/

function missingNumber(arr)
{
    let missNumber=[];
    for(let i=0;i<arr.length-1;i++)
    {
        console.log(arr[i],arr[i]+1,arr[i+1])
        if(arr[i]+1!==arr[i+1])
        missNumber.push(arr[i]+1)
    }
    return missNumber;
}

console.log(missingNumber([1,2,3,5,6]))
