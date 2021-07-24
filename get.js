/* Create the get function. It takes 2 arguments:
    src an object
    path a string
...and returns the value at the given string path. For example:

👑 👑 👑 

🍎 const src = {
    nested: {
        key: "peekaboo"
    }
}

🍎 const path = "nested.key";

🥝 console.log(get(src, path));
    > return "peekaboo" ✔️
    
👑 👑 👑 */

function get(src, path)
{
    let props = path.split("."); // array contenant les propriétés de l'objet.
    let current = src;

    props.forEach(function(prop)
    {
        if(current === undefined)
        {
            return current;
        }
        current = current[prop];
    });
    return current;
}


/* Utilisation de la méthode Reflect.get(myObject, myProperty) :
    
const object1 = {
    x: 1,
    y: 2
  };
  
console.log(Reflect.get(object1, "x"));
// > return: 1
  
const array1 = ['zero', 'one'];
  
console.log(Reflect.get(array1, 1));
// > return: "one"

*/