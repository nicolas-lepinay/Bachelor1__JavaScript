/* 

👑 Consignes 👑

You have been given the mission to create a new sense of time.
Instead of a normal week having only 7 days, you will have 14 days.
Your mission is to create an addWeek function with one parameter of Date type.
So now, a week is 14 days from Monday to Sunday then secondMonday to secondSunday.
Week number should be count from 0001-01-01

Now imagine you have a doctor appointment and you have to wait some hours.
But you do not want to wait, so what you need to do is create a
function timeTravel that allows you to change the time according to your needs, this function
it can go backwards or forwards in time.
You will have a function that takes a date and you will pass 3 more parameters to change
the hour, minute and seconds.

Example :

timeTravel({ date, hour, minute, second })

timeTravel({
  date: new Date('2020-05-29 23:25:22'),
  hour: 21,
  minute: 22,
  second: 22,
})

Output: Date { 2020-05-29T21:22:22.000Z }     */

// 👑 Fonction addWeek 👑

function addWeek(myDate)
{
  // La méthode .getDay() renvoie un numéro allant de 0 à 6 permettant d'identifier le jour de la semaine d'une date donnée.
  // Le numéro 0 correspond à un dimanche, le n°1 à un lundi, le n°2 à un mardi ... et le n°6 à un samedi.
  const weekDayNum = myDate.getDay();

  // Je crée un tableau weekDays qui suit la même numérotation que la méthode .getDays() : il va de weekDays[0] = "Sunday" jusqu'à weekDays[6] = "Saturday" :
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  // La première date de notre référentiel est le 1er janvier de l'an 1 :
  const first = new Date('0001-01-01')

  // La constante week va stocker le numéro de semaine de myDate, c'est-à-dire le nombre de semaines écoulées depuis le 1er janvier de l'an 1.
  // En calculant (myDate - first), on obtient le nombre de millisecondes écoulées entre les deux dates, sachant qu'une journée contient 86 400 000 millisecondes.
  // En calculant ((myDate - first) / 86400000), on obtient le nombre de jours écoulées entre les deux dates.
  // En calculant ((myDate - first) / 86400000 / 7), on obtient le nombre de semaines écoulées entre les deux dates.
  // On ajoute 1 pour que la toute première semaine (commençant le 1er janvier de l'an 1) porte le numéro 1 et non pas 0.
  // On utilise Math.ceil pour arrondir le résultat à l'unité haute : 
  const week = Math.ceil((myDate - first + 1) / 86400000 / 7);

  // Si le numéro de semaine est impair (1, 3, etc.), on renvoie le jour usuel ("Monday", "Tuesday", etc.) :
  if(week%2 != 0){return weekDays[weekDayNum];}

  // Si le numéro de semaine est pair (2, 4, etc.), on renvoie le jour précédé de 'second' ("secondMonday", "secondTuesday", etc.) :
  else{return "second" + weekDays[weekDayNum];}
}

// 👑 Fonction timeTravel 👑

function timeTravel({date, hour, minute, second})
{
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();

  return new Date(year, month, day, hour, minute, second);

  /* On aurait également pu faire : 
  date.setHours(hour);
  date.setMinutes(minute);
  date.setSeconds(second);
  return date;
  */
}

/*

 👑 Exemples 👑

const date1 = new Date('2020-01-01') // 1er janvier 2020
const date2 = new Date('2020-01-03') // 3 janvier 2020

const diffMillisecond = date2 - date1; // return 172 800 000, c'est-à-dire 2x 86 400 000, soit 2 jours (2 jours se sont bien écoulés entre le 1er et le 3 janvier).
const diffDay = (date2 - date1) / 86400000; // return 2, c'est-à-dire 2 jours.
const diffWeek = (date2 - date1) / 86400000 / 7; // return 1 (A CONDITION D'ARRONDIR LE RÉSULTAT AVEC Math.ceil !), car le 1er janvier et le 3 janvier figurent dans la même semaine.


👑 Exemples de création de dates 👑

let today = new Date()
let birthday = new Date('December 17, 1995 03:24:00')
let birthday = new Date('1995-12-17T03:24:00')
let birthday = new Date(1995, 11, 17) // les mois vont de 0 à 11.
let birthday = new Date(1995, 11, 17, 3, 24, 0)

*/