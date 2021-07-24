/* Create 3 functions:

    multiply that act like the * operator without using it
    divide that do an integer division without using /
    modulo that act like the % operator without using it

    functions should have (a, b) as arguments.

*/

function multiply(a, b)
{
    let result = 0;
    let isNegative = false;

    if(b<0){b = -b; isNegative = true};
    while(b>0){result += a; b--};
    if(isNegative){result = -result};
    return result;
}

function divide(a, b) {
    let isNegative = false
    let count = 0
    if (a < 0 && b < 0) {
        a = -a
        b = -b
    }

    if (a < 0) {
        a = -a
        isNegative = true
    }
    if (b < 0) {
        b = -b
        isNegative = true
    }
    let result = a
    while (result > b) {
        result -= b
        count++
    }
    if (isNegative) {
        count = -count
    }
    return count
}
function modulo(a, b) {
    let isNegative = false
    if (a < 0) {
        a = -a
        isNegative = true
    }
    if (b < 0) {
        b = -b
    }
    let result = a
    let c = b
    let count = 1
    while (b < result) {
        result = result - c
        count++
    }
    if (isNegative) {
        result = -result
    }
    return result
}

