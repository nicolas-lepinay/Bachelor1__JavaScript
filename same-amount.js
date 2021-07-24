/* Create a sameAmount function that takes three parameter,
a data string and 2 regexes.

The objective is to confirm that the second and the third parameter matched
the same amount of times in the first parameter. */

const sameAmount = (myString, reg1, reg2) => {

    // Si les reg entrés en paramètres n'ont pas le marqueur global (\g), je le leur rajoute :
    if(reg1.global === false){
        var regex1 = new RegExp(reg1.source, reg1.flags + "g")
    }else{var regex1 = reg1}

    if(reg2.global === false){
        var regex2 = new RegExp(reg2.source, reg2.flags + "g")
    }else{var regex2 = reg2}

    // Si myString.match(regex) est null (aucun match), on lui substitue un tableau vide ([]), car on ne peut pas faire un .length de quelque chose de null :
    let count1 = (myString.match(regex1) || []).length;
    let count2 = (myString.match(regex2) || []).length;
    // Je renvoie true/false si count 1 et count 2 sont égaux/différents :
    return count1 === count2;
  }
  
/* Exemple 1 :
const str = 'abc, def, ghi'
const regex1 = /[a-z]{3}/g
const regex2 = /[a-z]{4}/g

sameAmount(str, regex1, regex2);
> false (car count1 = 1; count2 = 0)

/* Exemple 2 :
const data = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`
const reg1 = /q /
const reg2 = /qqqqqqq/

sameAmount(data, reg1, reg2);
  > false (car count1 = 6; count2 = 2)

*/