// To find the largest pair of the 2 elements using indexing with unsorted elements

/*
Algorithm
Step-1: Intialize an array with the inital elements as the largest Pair
Step-2: Now take two loop an outer and an inner 
Step-3: Now check if the elements in the variable initialized is greater than or not.
Step-4: If its greater than the intialized elements then it add to an array and return 
*/

function findLargestPair(arr)
{
    let largestPair=[arr[0],arr[1]]
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]+arr[j] > largestPair[0]+largestPair[1])
            largestPair=[arr[i],arr[j]]
        }
    }
    return largestPair
}
const arr=[2,22,3,6,8,9]
console.log(findLargestPair(arr));