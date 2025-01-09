
/* userName and userInput doesn’t meter, to resolve the issue - 
you have to use toLowerCase method with userName and userInput both side */

const userName = "blackPink";
const userInput = "blackPinK";
console.log(userName.toUpperCase());
console.log(userInput.toUpperCase());
if (userName.toUpperCase() === userInput.toUpperCase()){
    console.log("Valid User");
}
else{
    console.log("Invalid User");
}

