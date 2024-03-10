// Check if a string is an Anagram

// Algorithm
// Step-1: Iterate over the characters and make it as an object.
// Step-2: Now check through hasOwnProperty whether its there or not.
// Step-3: If all the charcacters are there it means it is an anagram else not.

function anagram(word1,word2)
{
    const obj1={};
    let flag=0;
    if(word1.length!==word2.length)
    {
       return "Not Anagram" 
    }
    else
    {
         for(let i=0;i<word1.length;i++)
    {
        obj1[word1[i]]=true;
    }
    for(let j=0;j<word2.length;j++)
    {
        if(obj1.hasOwnProperty(word2[j]))
        flag=1;
        else
        flag=0;
    }
    }
   
    return flag==1?"Anagram":"Not Anagram"
}

console.log(anagram("triangle","relating"))

// Other Way

function anagram(w1,w2)
{
    if(w1.length!==w2.length)
    {
        return "Not Anagram"
    }
    const obj={}
    
    for( let char1 of w1)
    {
        obj[char1]=(obj[char1]||0)+1;
    }
    for(let char2 of w2)
    {
        if(!obj[char2])
        {
            return "not Anagram"
        }
        obj[char2]--;
    }
    return "Anagram";
}

console.log(anagram("triangle","relatind"))