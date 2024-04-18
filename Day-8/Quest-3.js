// To check if given number is prime or not

// Algorithm
// Step-1: Check if the number is divisible by any other number other than 1 and number itself
// Step-2: If the condition is true then return prime else return non prime

function checkPrime(num)
{
    if(num<=1)
    return `${num} is not a prime number`
    else
    {
        for(let i=2;i<num;i++)
        {
            if(num%i==0)
            return `${num} is not a prime number`
        }
    }
    return `${num} is  a prime number`
    
}    
console.log(checkPrime(44))