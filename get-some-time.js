/* Create a function firstDayWeek that receives a week of the year (from 1 to 53) and a year (as a string), 
and returns the first day of that week, in the format: 'dd-mm-yyyy'. 

By beginning of the week, we mean the monday of that week.
If the first week is requested and it starts on the previous year of the presented one, it should return the first day of the year.  */

function firstDayWeek(week, year) {
    let first = new Date(year + '-01-01')
    if (week != 1) {
        first.setDate(first.getDate() + ((week-1) * 7) - first.getDay() +1)
    }
    return first.toISOString().slice(0,10).split('-').reverse().join('-')
}

/* Bizarrement, cette fonction ne me renvoie pas le résultat attendu avec week = 52 et year = 1000. Il y a 2 jours d'écarts...

function firstDayWeek(week, year)
{
    // Je crée une date commençant au 1er janvier à partir de l'année 'year' :
    let date = new Date(year + "-01-01"); // Par exemple, si year = "2021" : date = 2021-01-01 00:00:00.

    // Je convertis la date en millisecondes (temps écoulé entre le 01/01/1970 et la date en question), 
    // à laquelle je rajoute 604 800 000 ms (= une semaine en ms) multiplié par le numéro de la semaine auquel j'enlève 1,
    // car la première semaine est la n°1 et non n°0. Or, si l'on est à la première semaine, il ne faut rien ajouter du tout (donc multiplier par 0, pas 1).
    let x = date.getTime() + 604800000 * (week-1);

    // Je crée une date à partir du nombre de millisecondes 'x' :
    let myDate = new Date(x);

    // Je formate le résultat au format DD-MM-YYYY et pour ne plus avoir l'heure :
    let result = [myDate.getDate(), myDate.getMonth()+1, myDate.getFullYear()]; // Il faut ajouter 1 au mois car les mois commençent à 0 et finissent à 11.
    
    // Si les jours et les mois sont des 'single digits' (c-à-d compris entre 1 et 9), je les transforme en 'double digits' (c-à-d toujours précédés d'un 0) :
    for (let i = 0; i < result.length; i++)
    {
        if(result[i] < 10) {result[i] = '0' + result[i].toString()} 
    }
    return result.join("-");
}

*/

// console.log(firstDayWeek(52, 1000));
// > return "24-12-2021".
