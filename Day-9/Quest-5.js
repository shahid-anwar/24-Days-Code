// Uppercase of each first letter of a words using Array map function

function firstLetter(sentence)
{
    let split=sentence.split(" ");
   return  split.map((words)=>words.charAt(0).toUpperCase()+words.slice(1)).join(" ")
}

console.log(firstLetter("My name is shahid"))