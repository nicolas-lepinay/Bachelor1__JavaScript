/* 

Create 2 functions:

    get: a function that takes a key and return the corresponding value from the sourceObject.

    set: a function that takes a key and a value update the value for the corresponding property of the sourceObject and return the set value.

Code provided (all code provided will be added to your solution and doesn't need to be submited):

const sourceObject = {
  num: 42,
  bool: true,
  str: 'some text',
  log: console.log,
}

*/


function get(property)
{
    return sourceObject[property];
}

function set(property, value)
{
    return sourceObject[property] = value;
}