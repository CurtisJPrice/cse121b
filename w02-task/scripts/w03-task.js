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
document.querySelector("#addNumbers").addEventListener('click', addNumbers)


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
