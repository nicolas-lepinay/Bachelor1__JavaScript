// Finish your groceries!!!

// Create 3 functions that works like the .filter, .map and .reduce array method but for the entries of the grocery cart.

//     filterEntries filters using both key and value.
//     mapEntries changes either the key or the value or both.
//     reduceEntries reduce over entries.

// Create 3 other functions that use your previously create functions:

//     totalCalories that will return the total calories of a cart
//     lowCarbs that will leave only items that total carbs are lower than 50grams
//     cartTotal that will give you the right amount of calories, proteins, ..., of all items in your grocery cart.


function filterEntries(obj, func)
{
    return Object.fromEntries(Object.entries(obj).filter(func));
}

// Équivalent à :
// function filterEntries(myObj, myFunc)
// {
//     let newObj = {};
//
//     for(let [key, value] of Object.entries(myObj))
//     {
//         if(myFunc([key, value])) { newObj[key] = value }
//     }
//     return newObj;
// }


function mapEntries(obj, func)
{
    return Object.fromEntries(Object.entries(obj).map(func));
}

// Équivalent à :
// function mapEntries(myObj, myFunc)
// {
//     let newObj = {};
//
//     for(let [key, value] of Object.entries(myObj))
//     {
//         newObj[myFunc([key, value])[0]] = func([key, value])[1];
//     }
//     return newObj;
// }


function reduceEntries(obj, func, n)
{
    return n === undefined     // if(n === undefined)
        ? Object.entries(obj).reduce(func)    // return...
        : Object.entries(obj).reduce(func, n);   // else { return... }
}


const lowCarbs = (obj) => {
    let res = {}
    for (let [k, v] of Object.entries(obj)) {
        if (v/100*nutritionDB[k]['carbs'] < 50) {
            res[k] = v
        }
    }
    return res
}


const totalCalories = (obj) => {
    let res = 0
    for (let [k, v] of Object.entries(obj)) {
        res += v/100*nutritionDB[k]['calories']
    }
    return Number(res.toFixed(1))
}


const cartTotal = (obj) => {
    let res = {}
    for (let [k, v] of Object.entries(obj)) {
        let tmp = {}
        for (let [kk, vv] of Object.entries(nutritionDB[k])) {
            tmp[kk] = Math.round((v/100*vv)*1000)/1000
        }
        res[k] = tmp
    }
    return res
}
  


