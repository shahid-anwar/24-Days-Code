

// Uppercase of each first letter of a words
// Example-"My name is shahid"
// Output- "My Name Is Shahid".

// Algorithm
// Step-1: First take out the first letter using loops.
// Step-2: Convert to Uppercase using charAt and toUpperCase functions and return.

function firstLetter(sentence)
{
    let words=sentence.split(" ")
    for(let i=0;i<words.length;i++)
    {
      
        let firstLetter=words[i].charAt(0).toUpperCase()
        words[i]=firstLetter+words[i].substring(1)
    }
    // console.log(words)
    return words.join(' ')
}



console.log(firstLetter("My name is shahid"))

