function performCalculation(operator) {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let result;

    if(operator === 'add') {
        result = num1 + num2;
    }
    else if(operator === 'subtract') {
        result = num1 - num2;
    }
    else if(operator === 'multiply') {
        result = num1 * num2;
    }
    else if(operator === 'divide') {
        if(num2 == 0) {
            result = "Error: Division by zero is not allowed.";
        } else {
            result = num1 / num2;
        }
    }
    document.getElementById('results').textContent = result;
}

function clearResults() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
}





