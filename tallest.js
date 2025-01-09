function getMaxInArray(numbers){
    console.log("Array inside the array", numbers)

    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        console.log(index, element);
        if(element > largest){
            largest = element;
        }
    }
    return largest;
    // return Math.max(numbers);
}


const heights = [167, 190, 120, 165, 137, 265];
const tallest = getMaxInArray(heights);
console.log("Tallest person is:", tallest);





function getLowestNumberInArray(numbers){
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        const arrayIndex = i;
        const arrayElement = numbers[arrayIndex];
        console.log(arrayIndex, arrayElement);
        if (arrayElement < smallest){
            smallest = arrayElement;
        }
    }
    return smallest;
}


const lowest = [30, 48, 79, 13, 59, 90, 67, 2, 45];
const shortest = getLowestNumberInArray(lowest);
console.log("The lowest number is:", shortest);
