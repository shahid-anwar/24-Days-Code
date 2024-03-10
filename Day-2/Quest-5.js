// Swapping of two numbers using 3rd variable
// Algorithm
// Step-1: Fist put the value of first variable in the third variable.
// Step-2: Then put the value of second variable in the first variable.
// Step-3: Now put the value of third variable in the second variable.

function swap(num1,num2)
{
    let a=num1;
    let b=num2;
    let c;
    c=a;
    a=b;
    b=c
    return {a,b}
    
}
console.log(swap(10,15))