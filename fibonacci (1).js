let num1 = 0;
let num2 = 1;

for(let x = 0; x < 6; x++){
    let hold = num1;
    console.log(num2);
    num1 = num2;
    num2 = hold + num2;
    
}
