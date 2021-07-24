// I do not want onions. I want oranges!!!
// Create 3 functions that works like the .filter, .map and .reduce array method but for the keys of your grocery cart.

//     filterKeys filters the name of the items you have.
//     mapKeys changes the name of the items you have.
//     reduceKeys reducing you grocery cart.


function filterKeys(myObj, myFunc)
{
    let newObj = {};

    for(let [key, value] of Object.entries(myObj))
    {
        if(myFunc(key)) { newObj[key] = value }
    }
    return newObj;
}

function mapKeys(myObj, myFunc)
{
    let newObj = {};

    for(let [key, value] of Object.entries(myObj))
    {
        newObj[myFunc(key)] = value;
    }
    return newObj;
}

function reduceKeys(cart, func, n)
{
    return n === undefined     // if(n === undefined)
        ? Object.keys(cart).reduce(func)    // return...
        : Object.keys(cart).reduce(func, n);   // else { return... }
}
  


