// String reverse with reversing of individual words
//Example-: "Shahid is my name"
// Output-: "eman ym si dihahS"

// Algorithm
// Step-1: We have to first split with spaces.
// Step-2: We have to iterate it through it and then 
// Step-3: We have to take another inner loop to reverse the Words.

// function reversedWord(str)
// {
//     let resultStr="";
//     let reversedWord="";
//     for(let i=0;i<str.length;i++)
//     {
//         if(str[i]!==" ")
//         {
//             reversedWord=str[i]+reversedWord;
//         }
//         else
//         {
//             resultStr+=reversedWord+ " ";
//             reversedWord="";
//         }
//     }
//     resultStr+=reversedWord;
//     return resultStr
// }

// Making Complexity good
function reverseWords(str) {
    let resultStr = "";
    let reversedWord = "";
      let reversedWords=[];
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
       
        reversedWord = str[i] + reversedWord;
      } else {
       reversedWords.push(reversedWord)
        reversedWord = ''; 
      }
    }
    
    reversedWords.push(reversedWord);
    
    for (let j = reversedWords.length - 1; j >= 0; j--) {
      resultStr += reversedWords[j] + ' ';
    }
    return resultStr;
  }

console.log(reversedWords("The Sky is Blue"))