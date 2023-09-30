/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
    function add(number1, number2){
        const sum = number1 + number2
        return sum
    }


/* Function Expression - Subtract Numbers */
function subtract(number1, number2){
    const difference = number1 - number2
    return difference
}


/* Arrow Function - Multiply Numbers */
function multiply(number1, number2){
    const product = number1 * number2
    return product
}


/* Open Function Use - Divide Numbers */
function divide(number1, number2){
    const quotient = number1 / number2
    return quotient
}


/* Decision Structure */
function addNumbers(){
    const firstNumber = document.querySelector("#addend1").value
    const secondNumber = document.querySelector("#addend2").value
    const sum = add(firstNumber,secondNumber)
    document.querySelector("#sum").value = sum
    
        console.log("First Number:", firstNumber)
        console.log("Second Number:", secondNumber)
        console.log("Sum", sum)
}
document.querySelector("#addNumbers").addEventListener('click', addNumbers);


const subtract = function (number1, number2) {
    return number1 - number2;
};

const subtractNumbers = function () {
    let minuend = parseInt(document.querySelector("#minuend").value);
    let subtrahend = parseInt(document.querySelector("#subtrahend").value);
    let result = subtract(minuend, subtrahend);
    document.querySelector("#difference").value = result;
};

document
    .querySelector("#subtractNumbers")
    .addEventListener("click", subtractNumbers);


    const multiply = (number1, number2) => number1 * number2;

    const multiplyNumbers = () => {
    let factor1 = parseInt(document.querySelector("#factor1").value);
    let factor2 = parseInt(document.querySelector("#factor2").value);
    let result = multiply(factor1, factor2);
    document.querySelector("#product").value = result;
};

document
    .querySelector("#multiplyNumbers")
    .addEventListener("click", multiplyNumbers);


function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers() {
    let dividend = parseInt(document.querySelector("#dividend").value);
    let divisor = parseInt(document.querySelector("#divisor").value);
    let result = divide(dividend, divisor);
    document.querySelector("#quotient").value = result;
}

document
    .querySelector("#divideNumbers")
    .addEventListener("click", divideNumbers);


const currentDate = new Date();

let currentYear;

currentYear = currentDate.getFullYear();

document.querySelector("#year").textContent = currentYear;


  /* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25
];

document.querySelector("#array").textContent = numbers;

/* Output Odds Only Array */
document.querySelector("#odds").textContent = numbers.filter(
    (number) => number % 2
);

/* Output Evens Only Array */
document.querySelector("#evens").textContent = numbers.filter(
    (number) => number % 2 === 0
);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").textContent = numbers.reduce(
    (sum, number) => sum + number,
    0
);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").textContent = numbers.map(
    (number) => number * 2
);

/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").textContent = numbers
    .map((number) => number * 2)
    .reduce((sum, number) => sum + number, 0);