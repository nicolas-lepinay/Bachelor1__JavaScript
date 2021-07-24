/*
Create the following constant variables:

    escapeStr, that contains the following specials characters: `, \, /, ", '
    arr that is an array containing the values 4 and '2'
    obj that is an object containing a property for each primitives:
        str for String
        num for Number
        bool for Boolean
        undef for undefined
    nested that contains
        arr: an array of the 3 values: 4, undefined, '2'
        obj: an object with 3 property (str, num & bool)

nested and obj must be frozen to prevent changes from them.

*/

var escapeStr = "`\\/\"'";
var arr = [4,'2'];
const obj= { 
    str: "This is a string", 
    num: 42,  
    bool: true,
    undef: undefined
}

const nested = {
    arr : [4,undefined,'2'],
    obj : {
        str: "Another string!", 
        num: 7,  
        bool: true
    }
}   

// Object.freeze(nom-de-l-objet) permet de rendre un objet immuable. Il faut aussi freezer ses sous-objets pour que ce soit effectif :
Object.freeze(obj)
Object.freeze(nested)
Object.freeze(nested.obj)
Object.freeze(nested.arr)





