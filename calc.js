// CALCULATOR

function Calc(operation, a, b) {

// Parameters Check
    if (operation, a, b === undefined 
        || typeof a !== 'number' 
        || typeof b !== 'number'){
        return alert('Error')
    }
    else if(operation !== 'sum'
        && operation !== 'min' 
        && operation !== 'mult' 
        && operation !== 'div' 
        && operation !== 'rem'
        && operation !== 'exp'
        && operation !== undefined) {
        return alert('Unknown operation')
    }

// Operations
    else if(operation === 'sum'){
        return alert(a + b)
    }
    else if(operation === 'min'){
        return alert(a - b)
    }
    else if(operation === 'mult'){
        return alert(a * b)
    }
    else if(operation === 'div'){
        return alert(a / b)
    }
    else if(operation === 'rem'){
        return alert(a % b)
    }
    else if(operation === 'exp'){
        return alert(a ** b)
    }
}

// Errors checking
// Calc('sum', 4, 4)        // 8
// Calc('jhg', 4, 4)        // Unknown operation
// Calc()                   // Error
// Calc('sum', 'any', 5)    // Error

// Correct result
// Calc('sum', 2, 2)      // 4
// Calc('min', 4, 7)      // -3
// Calc('mult', 4, 10)    // 40
// Calc('div', 100, 2)    // 50
// Calc('rem', 15, 12)    // 3
// Calc('exp', 3, 4)      // 81