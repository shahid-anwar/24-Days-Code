// Fibonacci Series (0,1,1,2,3,5,8,13....)

// Algorithm
// Step-1: Take an array to store the values.
// Step-2: Return the array as 0,1 if its upto 2.
// Step-3: Else Iterate upto last number given.
// Step-4: Push the sum of last number and second last number and increase the length.


function fibonacci(seriesNumber)
{
    let fibArr=[0];
    let len=fibArr.length;
    if(seriesNumber==1)
    {
        return fibArr
    }
  else if(seriesNumber==2)
  {
      fibArr.push(1)
      return fibArr
  }
    else
    {
        fibArr.push(1)
      for(let i=2;i<seriesNumber;i++)
      {
          fibArr.push(fibArr[len]+fibArr[len-1])
          len++
      }
      return fibArr
    }
}

console.log(fibonacci(10))


