/* Make a function called letterSpaceNumber that receives a string and returns an
array with every instance of a letter, followed by a space, followed by a number
only if that number has only one digit and is not followed by any letter. */

function letterSpaceNumber(str)
{
    let regex = /[a-z]\s\d\b/gi; 
    // regex va matcher toutes les sous-strings composées d'une lettre minuscule quelconque ([a-z]) suivie d'un espace (\s) et suivie d'un digit (\d), puis on termine par \b (pour que les digits soient uniques, pas composés). 
    // On ajoute les modifiers g (recherche globale) et i (insensible à la casse : matche aussi les lettres majuscules).

    let result = str.match(regex);

    if(result !== null){return result}
    else{return []}
}

//console.log(letterSpaceNumber("He is 8 or 9 years old, not 10."));