/* Write a bunch of function to move from one type to another

    arrToSet from Array to Set
    arrToStr from Array to String
    setToArr from Set to Array
    setToStr from Set to String
    strToArr from String to Array
    strToSet from String to Set
    mapToObj from Map to Object
    objToArr from Object to Array
    objToMap from Object to Map
    arrToObj from Array to Object
    strToObj from String to Object

and finally write a function superTypeOf that unlike typeof return a different value for advanced types like Map and Set. */

function arrToSet(myArr)
{
    let mySet = new Set(); // Les 2 paranthèses vides ne sont pas obligatoires.
    for (let i = 0; i < myArr.length; i++)
    {
        mySet.add(myArr[i]);
    }
    return mySet;
}

function arrToStr(myArr)
{
    let myString = "";
    for (let i = 0; i < myArr.length; i++)
    {
        myString+=myArr[i];
    }
    return myString;
}

function setToArr(mySet)
{
    let myArr = Array.from(mySet);
    return myArr;
}

/* AUTRES SOLUTIONS :

function setToArr2(mySet)
{
    return [...mySet];
}

function setToArr3(mySet)
{
    let myArr = [];
    for(let item of mySet)
    {
        myArr.push(item)
    }
    return myArr;
}

*/

function setToStr(mySet)
{
    let myString = "";
    for(let item of mySet)
    {
        myString+=item;
    }
    return myString
}

function strToArr(myString)
{
    let myArr = [];
    for(let i = 0; i < myString.length; i++)
    {
        myArr.push(myString[i]);
    }
    return myArr;
}

function strToSet(myString)
{
    let mySet = new Set();
    for(let i = 0; i < myString.length; i++)
    {
        mySet.add(myString[i]);
    }
    return mySet;
}

function mapToObj(myMap)
{
    let myObj = {};
    for(let [key, value] of myMap)
    {
        myObj[key] = value;
    }
    return myObj;
}

function objToArr(myObj)
{
    let myArr = [];
    for(let property in myObj)
    {
        myArr.push(myObj[property]);
    }
    return myArr;
}

function objToMap(myObj)
{
    let myMap = new Map();
    for(let key in myObj)
    {
        myMap.set(key, myObj[key]);
    }
    return myMap;
}

function arrToObj(myArr)
{
    let myObj = {};
    for (let i = 0; i < myArr.length; i++)
    {
        myObj[i] = myArr[i];
    }
    return myObj;
}

function strToObj(myString)
{
    let myObj = {};
    for (let i = 0; i < myString.length; i++)
    {
        myObj[i] = myString[i];
    }
    return myObj;
}

function superTypeOf(myVar)
{
    if(myVar===null)
    {
        return "null";
    }

    let classes = {
        Set,
        Map,
        Array,
        Function
    }
    for (let property in classes)
    {
        if(myVar instanceof classes[property])
        {
            return property;
        }
    }

    let types = {
        Number: "number",
        String: "string",
        Object: "object"
    }
    for(let property in types)
    {
        if(typeof(myVar)===types[property])
        {
            return property;
        }
    }
    
    return typeof myVar;
}