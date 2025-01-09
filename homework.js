/* function findMaxNumber(num1, num2, num3){
    let max;

    if (num1 >= num2 && num1 >= num3){
        max = num1;
        // console.log("The max number is:", num1);
    }
    else if (num2 >= num1 && num2 >= num3){
        max = num2;
        // console.log("The max number is:", num2);
    }
    else{
        max = num3;
        // console.log("The max number is:", num3);
    }
    return max;
}


const maxNumber = findMaxNumber(69, 97, 99);
console.log("The maximum number is:", maxNumber);




function findMinNumber(num1, num2, num3){
    let min;

    if (num1 <= num2 && num1 <= num3){
        min = num1;
        // console.log("The min number is:", num1);
    }
    else if (num2 <= num1 && num2 <= num3){
        min = num2;
        // console.log("The min number is:", num2);
    }
    else{
        inx = num3;
        // console.log("The inx number is:", num3);
    }
    return min;
}


const minNumber = findMinNumber(69, 97, 99);
console.log("The lowest number is:", minNumber); */



// =================================================


/* function findMax(num1, num2, num3) {
    let max = num1; 
  
    if (num2 > max) {
      max = num2;
    }
  
    if (num3 > max) {
      max = num3;
    }
  
    return max;
  }
  
  // Example usage:
  let number1 = 69;
  let number2 = 97;
  let number3 = 99;
  
  let maxNumber = findMax(number1, number2, number3); 
  console.log("The maximum number is:", maxNumber); // Output: The maximum number is: 15





  
  function findMin(num1, num2, num3) {

    let min = num1;
  
    if (num2 < min) {
      min = num2;
    }
  
    if (num3 < min) {
      min = num3;
    }
  
    return min;
}
  
  // Example usage:
  let numbr1 = 69;
  let numbr2 = 97;
  let numbr3 = 99;
  
  let minNumber = findMin(numbr1, numbr2, numbr3); 
  console.log("The lowest number is:", minNumber); // Output: The lowest number is: 69 */



/* function findMaxNumber(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

// Example usage
const max_Number = findMaxNumber(69, 97, 99);
console.log(`The maximum number is: ${max_Number}`);



function findMax(num1, num2, num3) {
    // Find the maximum of the first two numbers
    let maxOfTwo = Math.max(num1, num2); 
  
    // Compare the maximum of the first two numbers with the third number
    return Math.max(maxOfTwo, num3); 
  }
  
  // Example usage:
  let numr1 = 69;
  let numr2 = 97;
  let numr3 = 100;
  
  let maxNumber = findMax(numr1, numr2, numr3); 
  console.log("The maximum number is:", maxNumber); // Output: The maximum number is: 15 */







  
function findMinNumber(num1, num2, num3) {
    return Math.min(num1, num2, num3);
}

// Example usage
const min_Number = findMinNumber(69, 97, 99);
console.log(`The lowest number is: ${min_Number}`);



function findMin(num1, num2, num3) {
    // Find the lowest of the first two numbers
    let minOfTwo = Math.min(num1, num2); 
  
    // Compare the lowest of the first two numbers with the third number
    return Math.min(minOfTwo, num3); 
  }
  
  // Example usage:
  let numr1 = 60;
  let numr2 = 90;
  let numr3 = 100;
  
  let minNumber = findMin(numr1, numr2, numr3); 
  console.log("The lowest number is:", minNumber); // Output: The lowest number is: 15








