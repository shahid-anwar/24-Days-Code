// Find factorial of user input number

// Agorithm
// Step-1: Use a for loop to iterate 
// Step-2: Calculate the factorial by multiplying with the iteration with 1 less.
// Example- 5*4*3*2*1=120

// function factorial(number)
// {
//     let fact=1;
//     if(number==1)
//     {
//         return fact
//     }
//     else
//     {
//         for(let i=number;i>0;i--)
//         fact=fact*i;
//     }
//     return fact;
// }

// Recursive Way

function factorial(num)
{
    if(num==0||num==1)
    return 1;
    else
    return num*factorial(num-1)
}

console.log(factorial(5))