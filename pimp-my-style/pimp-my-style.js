// Check out that button on the HTML page:
//      <button class="button">pimp my style</div>

// For now, it's only a lonely, basic and sad element ; let's pimp it up!
// On each click on the page, a function pimp is triggered.
// Write the body of that function so that the button's class is altered this way:
//     - You add in order the next class of the styles array provided in the data file below
//     - When the end of the array is reached, you remove backwards each class
//     - You toggle the class 'unpimp' when removing classes

// Example for a `styles` array with only 3 classes:

// Page load --> <button class="button"></div>

// ...adding
// Click 1 --> <button class="button one"></div>
// Click 2 --> <button class="button one two"></div>

// ...toggling `unpimp`
// Click 3 --> <button class="button one two three unpimp"></div>

// ...and removing backwards
// Click 4 --> <button class="button one two unpimp"></div>
// Click 5 --> <button class="button one unpimp"></div>
// Click 6 --> <button class="button"></div>


import { styles } from './data.js'

export { pimp }

let i = 0;      // Le compteur i démarre à 0.
let firstRound = true;      //firstRound est initialisé sur true (sens croissant).

function pimp() 
{
    let myButton = document.getElementsByClassName("button")[0];
    const lastClassOfStyles = styles[styles.length - 1];  // "fifteen"

    // Si firstRound = true, cela veut dire qu'on démarre en sens croissant :
    if(firstRound)
    {
            // On ajoute la classe styles[i] aux classes de myButton, et on incrémente i :
            myButton.classList.add(styles[i]);
            i++;
            // Si la dernière classe de myButton est la dernière classe de styles, on ajoute la classe 'unpimp' firstRound devient false.
            if(myButton.classList[i] === lastClassOfStyles) 
            {
                myButton.classList.add("unpimp"); 
                firstRound = false 
            }
    }

    // Si firstRound = false, cela veut dire qu'on part en arrière (sens décroissant) :
    if(!firstRound)
    {
            // On supprime la classe styles[i] des classes de myButton, et on décrémente i :
            myButton.classList.remove(styles[i]);
            i--;
            // Dès qu'il ne reste plus que les classes "button one unpimp", on supprime 'unpimp' et 'one' et on repart dans l'autre sens :
            if(i < 0) 
            {
                myButton.classList.remove("unpimp", "one");
                firstRound = true;
                i=0;
            }
    }
}