/* Create a function called vowelDots that receives a string and adds a . after
every vowel ('y' is not considered a vowel here) using a regex called vowels. */

// (Pour que le test Ytrack fonctionne, la variable vowels doit être définie globalement, en dehors de la fonction :)
let vowels = /[aeiou]/gi; 

function vowelDots(myString)
{
    let vowels = /[aeiou]/gi; // Inutile si la variable vowels a déjà été définie globalement plus haut.
    let arr = myString.match(vowels);
    let result = "";

    // S'il n'y a aucune voyelle, je renvoie la string d'origine :
    if(arr === null){return myString}

    let j = 0;
    for(let i = 0; i < myString.length; i++)
    {
        if(myString[i] !== arr[j]){result += myString[i];}
        if(myString[i] === arr[j]){result += myString[i] + "."; j++}
        //if(j === arr.length){result += myString.slice(i+1); return result}
    }
    return result;
}

// console.log(vowelDots("Something"));
// > "So.me.thi.ng"
