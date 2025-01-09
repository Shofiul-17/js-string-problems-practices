/* userName and userInput doesn’t meter, to resolve the issue - 
you have to use toLowerCase method with userName and userInput both side */

const userName = "blackPink";
const userInput = "blackPinK";
console.log(userName.toLocaleLowerCase());
console.log(userInput.toLocaleLowerCase());
if (userName.toLocaleLowerCase() === userInput.toLocaleLowerCase()){
    console.log("Valid User");
}
else{
    console.log("Invalid User");
}

const city = 'istanbul';

console.log(city.toLocaleLowerCase('en-US'));
// Expected output: "ISTANBUL"

console.log(city.toLocaleLowerCase('TR'));
// Expected output: "İSTANBUL"


const dotted = 'İstanbul';

console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`);
// Expected output: "i̇stanbul"

console.log(`TR: ${dotted.toLocaleLowerCase('tr')}`);
// Expected output: "istanbul"