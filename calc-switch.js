// CALCULATOR WITH SWITCH

function Calc(operation, a, b){

// Parameters Check
    if(operation === undefined && a === undefined && b === undefined 
        || typeof a !== 'number'
        || typeof b !== 'number'){
            return alert('Error')
    }

// Operations
    switch(operation){
        case 'sum':
            alert(a + b)
            break
        case 'min':
            alert(a - b)
            break
        case 'mult':
            alert(a * b)
            break
        case 'div':
            alert(a / b)
            break
        case 'rem':
            alert(a % b)
            break
        case 'exp':
            alert(a ** b)
            break
        default:
            alert('Unknown operation')
    }
}


// Errors checking
// Calc('sum', 4, 4)            // 8
// Calc('hfm', 4, 4)            // Unknown operation
// Calc()                       // Error
// Calc('sum', 'any', 4)        // Error

// Correct result
// Calc('sum', 2, 2)            // 4
// Calc('min', 4, 7)            // -3
// Calc('mult', 4, 10)          // 40
// Calc('div', 100, 2)          // 50
// Calc('rem', 15, 12)          // 3
// Calc('exp', 3, 4)            // 81