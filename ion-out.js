/* Make a function ionOut that receives a string and returns an array with every
word containing 'ion' following a t, without the 'ion'. */

function ionOut(myString)
{
    const regex = /\w*(?=tion)/gi;      // Toute séquence de caractères alphanumériques (\w*) suivis de "tion" : c'est à dire tout fragment de mots se terminant par "tion".
    let arr = myString.match(regex);    // Par exemple : arr = ["Promo", "Conven", "Nationalisa"].
    if(arr === null){arr = []}          // Si l'array est null (aucun mot ne finit par "tion"), on le remplace par un array vide ([]).

    // Pour une raison que j'ignore, le tableau arr contient également plusieurs strings vides ("")...
    // Je n'arrive pas à les supprimer avec arr.splice(index, 1), donc je vais pusher tout élément non-vide dans un 2nd tableau arr2 :
    let arr2 = [];
    for (let i = 0; i < arr.length; i++)
    {
        if(arr[i] !== ""){arr2.push(arr[i])};
    }

    // On rajoute une lettre "t" finale à chaque élément de arr2 :
    for (let i = 0; i < arr2.length; i++)
    {
        arr2[i] += "t";     // Par exemple, arr2 = ["Promot", "Convent", "Nationalisat"].
    }
    return arr2;
}