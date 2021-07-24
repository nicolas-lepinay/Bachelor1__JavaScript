// Create the cutFirst function that takes a string and remove the 2 first characters.
function cutFirst(str)
{
    let result = "";
    for(let i = 2; i < str.length; i++){result += str[i];}
    return result;
}
// Create the cutLast function that takes a string and remove the 2 last characters.
function cutLast(str)
{
    let result = "";
    for(let i = 0; i < str.length - 2; i++){result += str[i];}
    return result;
}

// Create the cutFirstLast function that takes a string as parameter and remove the 2 first characters and 2 last characters.
function cutFirstLast(str)
{
    let result = "";
    for(let i = 2; i < str.length - 2; i++){result += str[i];}
    return result;
}

// Create a keepFirst function that takes a string as parameter and return the string only keeping the 2 first characters.
const keepFirst = (str) => str.slice(0, 2);

// Create a keepLast function that takes a string as parameter and return the string only keeping the 2 last characters.
const keepLast = (str) => str.slice(-2);

// Create a keepFirstLast function that takes a string as parameter and only keep 2 first characters and 2 last characters. */
function keepFirstLast(str)
{
    let result = "";
    if(str.length > 3)
    {
        result += str.slice(0, 2);
        result += str.slice(-2);
        return result
    }
    else{return str}

}