/* Write a function called findIP that returns array of valid IPs, with or without a port, in a string passed as parameter

A valid IP has the following format :

    Must be in the form of xxx.xxx.xxx.xxx
    xxx is a number from 0-255
    You cannot have a 0 before a number, example 0xx
*/


// Ne fonctionne pas encore :
function findIP(dataSet)
{
    let regex = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9](?!999){1,3}/g;
    let arr = dataSet.match(regex);
    return arr;
}
