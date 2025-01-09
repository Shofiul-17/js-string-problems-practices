const num1 = 25;
const num2 = 45;

// const gap = num1 - num2;
const gap = Math.abs(num2 - num1);
console.log("Deference:", gap);

if(gap < 5){
    console.log("You guys can be friends!");
}
else{
    console.log("You guys stay apart!");
}