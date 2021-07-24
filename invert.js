// Create a function called invert that inverts an object's keys and values:

function invert(myObj)
{
    let entries = Object.entries(myObj);
    entries.forEach(function(pair)
    {
        let key = pair[0];
        let val = pair[1].toString();
        pair[0] = val;
        pair[1] = key;
    })
    return Object.fromEntries(entries);
}

// let object = { firstName: 'John', lastName: 'Doe', age: 32 }
// console.log(invert(object));