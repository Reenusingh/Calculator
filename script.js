const display = document.querySelector('#display');

// Function for handling input
function Insert(input) {
    const lastChar = display.value.charAt(display.value.length - 1);

    // Preventing two consecutive operators
    if (['+', '-', '*', '/', '%'].includes(input) && ['+', '-', '*', '/', '%'].includes(lastChar)) {
        return;
    }

    // Preventing adding more than one decimal point
    if (input === '.' && lastChar === '.') {
        return;
    }

    // Preventing operator at the beginning of the expression
    if (['+', '-', '*', '/', '%'].includes(input) && display.value === '') {
        return;
    }

    display.value += input;
}
//function for making input positive to negative or negative to positive
function Positive_Negative() {

    if (display.value === '') return;
    let lastChar = display.value.charAt(display.value.length - 1);
    if (!isNaN(lastChar) || lastChar === '.') {

        if (display.value.charAt(display.value.length - 2) === '-') {
            display.value = display.value.slice(0, -2) + lastChar;
        } else {
            display.value = display.value.slice(0, -1) + '(-' + lastChar + ')'; // Add the negative sign
        }
    } else {
        return;
    }
}

// Function for performing calculations
function Calculate() {
    try {
        //validating input
        const validExpression = /^[0-9+\-*/.%()]*$/;
        if (!validExpression.test(display.value)) {
            throw new Error('');
        }

        //performing execution
        const result = eval(display.value);

        // division by zero or invalid results
        if (result === Infinity) {
            display.value = 'Error';
        } else if (isNaN(result)) {
            display.value = '';
        }
        else {
            display.value = result;
        }
    } catch (error) {
        display.value = 'Error';
    }
}

// Function for clearing the display
function all_clear() {
    display.value = '';
}

// Function for removing the last character
function Remove() {
    display.value = display.value.slice(0, -1);
}