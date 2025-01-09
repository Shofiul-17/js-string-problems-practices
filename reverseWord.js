/* function wordsReverse(text){
    const words = text.split(" ");
    console.log(words);
    const result = []; // This is a empty array
    // [ 'I', 'am', 'a', 'good', 'boy' ]
    for(let i = words.length - 1; i >= 0; i--){
        const index = i;
        const element = words[index];
        // console.log(element);
        result.push(element);
    }
    console.log(result);
}




const myString = "I am a good boy"
wordsReverse(myString); */






function wordReverse(text){
    const word = text.split(" ");
    console.log(word);
    const result = []; // This is a empty array
    // [ 'I', 'am', 'a', 'good', 'boy' ]
    for(let i = word.length - 1; i >= 0; i--){
        const element = word[i];
        // console.log(element);
        result.push(element);
    }
    console.log(result);
    const reversed = result.join(" ");
    return reversed;
}


const myString = "I am a good boy"
const reversed = wordReverse(myString);
console.log(reversed);

