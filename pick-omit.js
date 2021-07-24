// Create a pick function that takes an object and keys. This function create a new object that picks only the keys (declared in the second argument) from the object passed as argument.
// Example :
//   - let obj = { firstName: 'John', lastName: 'Doe', age: 32, country: 'USA' }
//   - let keys = ['firstName', 'age']
//   > newObj: { firstName: 'John', age: 32 }

function pick(obj, keys)
{
    let newObj = {};
    if (typeof keys == "string") { keys = [keys]}   // Si keys n'est pas un array contenant plusieurs clés, mais une seule clé sous forme de string, je la transforme en array.

    keys.forEach(function(key)   // Pour chaque key de l'array keys...
    {
        if(obj[key] != undefined) { newObj[key] = obj[key] };     // ... si obj possède bien cette key, j'assigne à newObj la propriété key, et la valeur obj.key.
    });
    return newObj;
}


// Create a omit function that takes an object and keys. This function create a new object that omits only the keys (declared in the second argument) from the object passed as argument.
// Example :
//   - let obj = { firstName: 'John', lastName: 'Doe', age: 32, country: 'USA' }
//   - let keys = ['firstName', 'age']
//   > newObj: { lastName: 'Doe', country: 'USA' }

function omit(obj, keys)
{
    let newObj = {... obj};     // newObj est un clone de obj. Équivalent à : let newObj = Object.create(obj);
    if (typeof keys == "string") { keys = [keys]}

    keys.forEach(function(key)   // Pour chaque key de keys...
    {
        delete newObj[key];     // ...je supprime newObj.key
    });
    return newObj;
}