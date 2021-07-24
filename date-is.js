/* Create the following functions:

    isValid, this function must return false if its an Invalid Date
    isAfter, this function will receive two valid dates and return true if the first date is bigger then the second date
    isBefore, this function will receive two valid dates and return true if the first date is lesser then the second date
    isFuture, will return true if it is a valid the date given as parameter is higher then the present date
    isPast, will return true if it is a valid date given as parameter is less than the present date

*/

// 👑 Renvoie true si le paramètre est une instance de la fonction constructrice Date et si sa valeur en millisecondes est non-nulle :
const isValid = (myDate) => myDate > 0 || myDate < 0;

// 👑 Renvoie true si date1 est supérieure (postérieure) à date2 :
const isAfter = (date1, date2) => date1 > date2;

// 👑 Renvoie true si date1 est inférieure (antérieure) à date2 :
const isBefore = (date1, date2) => date1 < date2;

// 👑 Renvoie true si myDate est postérieure à la date actuelle :
const isFuture = (myDate) => myDate > Date.now();

// 👑 Renvoie true si myDate est une date valide et est antérieure à la date actuelle :
const isPast = (myDate) => isValid(myDate) && myDate < Date.now()
