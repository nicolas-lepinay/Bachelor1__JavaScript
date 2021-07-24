/*

Create 3 functions:

    a first function that takes an array or a string and return the first element.

    a last function that takes an array or a string and return the last element.

    a kiss function that returns an array of 2 elements the last and the first element, in that order.
    
*/


function first(parameter)
{
    return parameter[0];
}

function last(parameter)
{
    let i = parameter.length - 1;
    return parameter[i];
}

function kiss(parameter)
{
    let i = parameter.length - 1;

    let firstValue = parameter[i];
    let lastValue = parameter[0];

    let array = [firstValue, lastValue];
    return array;
}

/*
let myArray = ["One", "Two", "Three"];
let myString = "BONJOUR"

first(myArray, myString);
last(myArray, myString);
kiss(myArray, myString);
*/
