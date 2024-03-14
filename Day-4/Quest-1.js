// To find longest word from a string using custom code

// Example= My name is Shahid
// Longest word= Shahid

// Algorithm
// Step-1: Split the Sentence and store in an array.
// Step-2: Now iterate through the array and find the longest word with the help of maxlength
// Step-3: Replace if its longest else dont replace.


//Normal Code

// function longestWord(sentence)
// {
//   let word=sentence.split(" ");
//     let maxLength=0;
//     let longestWord='';
//     for(let i=0;i<word.length;i++)
//     {
//         let wordLength=word[i].length;
//         if(wordLength>maxLength)
//         {
//             maxLength=wordLength;
//             longestWord=word[i]
//         }
//     }
//     return longestWord;
// }


//  Using an Object

// function longestWord(sentence)
// {
//     let word=sentence.split(" ");
//     let result={word:"",length:0}
//     for(let i=0;i<word.length;i++)
//     {
//         let wordLength=word[i].length;
//         if(wordLength>result.length)
//         {
//             result.word=word[i]
//             result.length=wordLength;
//         }
//     }
//     return result;
// }


// Handling edge case when there is more than one word having same length

function longestWord(sentence) {
  let words = sentence.split(" ");
  let result = { words: [], length: 0 };

  for (let i = 0; i < words.length; i++) {
    let wordLength = words[i].length;
    if (wordLength > result.length) {
      result.words = [words[i]];
      result.length = wordLength;
    } else if (wordLength === result.length) {
      result.words.push(words[i]);
    }
  }

//   console.log("Longest Word(s):", result.words);
//   console.log("Length of Longest Word(s):", result.length);

  return result;
}

console.log(longestWord("My name is Shahid Siddique Badruddo"))