/* Create a nasa function that takes a number N as a parameter and returns a string with all numbers from 1 to the N separated by whitespace, with three exceptions:

    For numbers divisible by 3, add 'NA'.
    For numbers divisible by 5, add 'SA'.
    For the number that are divisible by 3 and 5 add 'NASA'.
 */

function nasa(N)
{
    // (1) Je remplis un tableau avec les chiffres de 1 à N :
    let arr = [];
    for(let i = 1; i <= N; i++){arr.push(i);}

    // (2) Je lis mon tableau et remplace les multiples de 3 par NA, de 5 par SA, et de 3 et 5 par NASA :
    for (let i = 0; i < arr.length; i++)
    {
        if(arr[i]%3 === 0 && arr[i]%5 === 0){arr.splice(i, 1, "NASA");}
        // .splice(i, 1, "NASA") : Je me place à l'indice i, je supprime l'élément (1 élément), et j'ajoute l'élément "NASA" à la place.

        if(arr[i]%3 === 0){arr.splice(i, 1, "NA");}

        if(arr[i]%5 === 0){arr.splice(i, 1, "SA"); }
    }

    // (3) J'utilise .join pour concaténer tous les éléments de mon tableau en une seule chaîne de caractères, en séparant chaque élément par un espace :
    let str = arr.join(" ");
    return str;
}

/* Autre méthode, sans tableau :

function nasa(N){
    let result = "";

    for(let i = 1; i <= N; i++){
        if(i%3 ===0 && i%5 ===0){
            result += 'NASA' + ' ';

        }else if(i%3 === 0 && i%5 != 0){
            result += 'NA' + ' ';

        }else if(i%3 != 0 && i%5 === 0){
            result += 'SA' + ' ';

        }else{
            result += String(i) + ' ';
        }   
    }

    result = result.slice(0, result.length-1)
    return result
}

*/
