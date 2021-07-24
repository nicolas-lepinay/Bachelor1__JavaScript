/* Create 3 functions:

    indexOf that returns the index of the first occurence of a value
    lastIndexOf that returns the index of the last occurence of a value
    includes that returns true if the value was found in the array

    If a value is not found, the returned index is -1

    functions should have an array element as first argument,
    both indexOf and lastIndexOf take an additional fromIndex argument
    that allows you to begin searching from a specific index.
*/

function indexOf(array, element, fromIndex)
{
    // Si fromIndex n'existe pas, il prend la valeur 0 par défaut.
    // Si fromIndex est plus grand que la taille du tableau ou est négatif, on renvoie -1.
    if(fromIndex===undefined){fromIndex = 0;}
    if(fromIndex>=array.length || fromIndex < 0){return -1;}
    
    // On cherche l'élément dans le tableau et on renvoie son indice :
    for(let i = fromIndex; i < array.length; i++)
    {
        if(array[i] === element){return i;}
    }
    return -1;
}

function lastIndexOf(array, element, toIndex)
{
    // Si toIndex n'existe pas, il prend la valeur du dernier indice du tableau par défaut.
    // Si toIndex est plus grand que la taille du tableau ou est négatif, on renvoie -1.
    if(toIndex===undefined){toIndex = array.length - 1;}
    if(toIndex>=array.length || toIndex < 0){return -1;}

    // On découpe array jusqu'à l'indice toIndex :
    let subArray = array.slice(0, toIndex+1);
    array = subArray;

    // On cherche l'élément dans le tableau en partant de la fin du tableau :
    for(let i = toIndex; i >= 0; i--)
    {
        if(array[i] === element){return i;}
    }
    return -1;
}

function includes(array, element)
{
    for(let i = 0; i < array.length; i++)
    {
        if(array[i] === element){return true;}
    }
    return false;
}
