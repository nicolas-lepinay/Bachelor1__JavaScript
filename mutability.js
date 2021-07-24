/*
Create a copy of the person object called clone1.
Create an other copy of the person object called clone2.

Create a new variable samePerson with the same value as person.

Increase by one the property age of person
and set his country to 'FR'.

Code provided (all code provided will be added to your solution and doesn't need to be submited) :

const person = {
  name: 'Rick',
  age: 77,
  country: 'US',
}

*/

// Méthode de clonage 1 :
const clone1 = {... person};

// Méthode de clonage 2 :
const clone2 = Object.assign({}, person);

/* Méthode de clonage 3 :
const clone3 = Object.create(person);
*/

var samePerson = person
person.age++;
person.country = 'FR';





