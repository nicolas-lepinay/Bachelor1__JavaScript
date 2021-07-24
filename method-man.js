/* Write 5 functions:

    words that takes a string and split it into an array of strings on spaces
    sentence that takes an array of strings and join them with spaces
    yell that take a string and return it in upper case
    whisper that take a string and return it in lower case and surround it with *
    capitalize  that takes a string and transforms it to upper case only for the first letter, and in lowercase for the rest of the string
*/

function words(myString)
{
    return myString.split(" ");
}

function sentence(myArray)
{
    return myArray.join(" ")
}

function yell(myString)
{
    return myString.toUpperCase();
}

function whisper(myString)
{
    return "*" + myString.toLowerCase() + "*";
}

function capitalize(myString)
{
    let result = myString[0].toUpperCase();
    result = result + myString.slice(1).toLowerCase();
    return result
}
