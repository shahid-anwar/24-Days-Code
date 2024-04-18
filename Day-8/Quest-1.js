// Sorting of a string/characters

// Algorithm
// Implementing bubble sort algorithm


function sorting(string)
{
    let arr=string.split("");
    let len=arr.length;
    let swapped=true;
    while(swapped)
    {
        swapped=false
        for(let i=0;i<len;i++)
        {
            if(arr[i]>arr[i+1])
            {
                let temp=arr[i];
                arr[i]=arr[i+1]
                arr[i+1]=temp;
                swapped=true;
            }
        }
    }
    return arr.join('')
}

console.log(sorting("ZYXWVUTSRQPONMLKJIHGFEDCBA"))
// ABCDEFGHIJKLMNOPQRSTUVWXYZ
