/* Implement 2 functions:
    split that works like the string method .split but take the string as it's first argument.
    join that works like the string method .join but take the array as it's first argument.
*/

function split(str, sep)
{
    let arr = []
    for (let i = 0; i < str.length - sep.length+1; i++) {
        if (str.slice(i,i+sep.length) == sep) {
            arr.push(str.slice(0, i))
            str = str.slice(i + sep.length)
            i = 0
        }
    }
    arr.push(str)
    return arr
}

function join(arr, link)
{
    let str = "";
    for(let i = 0; i < arr.length; i++)
    {
        str += arr[i] + link;   
    }
    // Je supprime le dernier élément de la string (dans le cas où "link" est un caractère unique) 
    // ou les n derniers éléments (dans le cas où "link" est une chaîne de plusieurs caractères)
    // car la boucle précédente rajoute un "link" supplémentaire indésirable à la fin :
    let n = link.length;
    str = str.slice(0, -n); // Par exemple, str.slice(0, -1) permet de supprimer le dernier élément d'une string.
    return str;
}


