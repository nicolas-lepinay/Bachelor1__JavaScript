// The goal of this exercise is to merge objects into a new object depending on the values type
// Create a function called fusion:
//     - If the type is an array you must concat it
//     - If it is a string you must concatenate with a space
//     - If it is numbers you must added them
//     - In case of type mismatch you must replace it with the value of the second object
//     - If it is an object you must fusion them recursively

const fusion = (first, second) => {
    if (Array.isArray(first) && Array.isArray(second)) {
      return first.concat(second);
    }
  
    if (typeof first === "string" && typeof second === "string") {
      return first + " " + second;
    }
  
    if (typeof first === "number" && typeof second === "number") {
      return first + second;
    }
  
    if (first === undefined) {
      return second;
    }
  
    if (second === undefined) {
      return first;
    }
  
    if (typeof first != typeof second) {
      return second;
    }
  
    if (first instanceof RegExp && second instanceof RegExp) {
      return second;
    }
  
    if (first instanceof Set && second instanceof Set) {
      return second;
    }
  
    let res = {};
  
    let keys = Object.keys(first).concat(Object.keys(second));
    keys.filter((key, i) => keys.indexOf(key) === i);
  
    keys.forEach((key) => {
      res[key] = fusion(first[key], second[key]);
    });
  
    return res;
  };