// Sorting of a number array with or without inbuilt methods

// Algorithm
// Implementing bubble sort algorithm

function sortNumber(arr)
{
    let len=arr.length;
    let swapped=true;
    while(swapped)
    {
        swapped=false;
        for(let i=0;i<len;i++)
        {
            if(arr[i]>arr[i+1])
            {
                let temp=arr[i];
                arr[i]=arr[i+1]
                arr[i+1]=temp
                swapped=true;
            }
        }
    }
    return arr;
}
console.log(sortNumber([10,9,8,7,6,5]))