/* userName and userInput doesn’t meter, to resolve the issue - 
you have to use toLowerCase method with userName and userInput both side */

const userName = "blackPink";
const userInput = "blackPinK";
console.log(userName.toLocaleUpperCase());
console.log(userInput.toLocaleUpperCase());
if (userName.toLocaleUpperCase() === userInput.toLocaleUpperCase()){
    console.log("Valid User");
}
else{
    console.log("Invalid User");
}

const city = 'istanbul';

console.log(city.toLocaleUpperCase('en-US'));
// Expected output: "ISTANBUL"

console.log(city.toLocaleUpperCase('TR'));
// Expected output: "İSTANBUL"