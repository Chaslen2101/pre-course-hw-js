let number1 = Math.floor(Math.random() * 100);
let numberCheck = Number.isInteger(number1 / 2);
if ( numberCheck == true) {
    console.log(number1, ':Это четное число');
} else {
    console.log(number1, ':Это нечетное число');
};