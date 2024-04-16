// To find the index of an element from an array.
// Algorithm
// Take a loop and iterate and if it matches then return the index

const arr=[1,2,3,4,5,6,7]
function findIndex(arr,elem)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===elem)
        return i
    }
    return -1;
}
console.log(findIndex(arr,7))