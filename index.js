var firstNumber = prompt('What is the first number: ');
var secondNumber = prompt('What is the second number: ');
var operation = prompt('What would you like to perform: +, -, /, *');
if (operation === '+') {
    alert(Number(firstNumber) + Number(secondNumber));
} else if (operation === '-') {
    alert(Number(firstNumber) - Number(secondNumber));
} else if (operation === '/') {
    alert(Number(firstNumber) / Number(secondNumber));
} else if (operation === '*') {
    alert(Number(firstNumber) * Number(secondNumber));
} else {
    alert('Refresh the page to restart!');
}