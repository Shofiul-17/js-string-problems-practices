// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

/* 
    // index   index    index
    fibo[3] = fibo[2] + fibo[1] // Expected element output - 2
    fibo[4] = fibo[3] + fibo[2] // Expected element output - 3
    fibo[5] = fibo[4] + fibo[3] // Expected element output - 5

    fibo[50] = fibo[49] + fibo[48] // Expected element output - 
    fibo[487] = fibo[486] + fibo[485] // Expected element output - 

    fibo[n] = fibo[n-1] + fibo[n-2] // Expected element output - 
    fibo[i] = fibo[i-1] + fibo[i-2] // Expected element output - 
*/


const fibonacci = [0, 1];
for(let i = 2; i <= 50; i++){
    // console.log(i);
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

console.log(fibonacci);




