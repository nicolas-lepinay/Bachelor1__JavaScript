/* Create the max function that takes 2 number as arguments and returns the greatest. You must not just use Math.max, make your own.
Create the min function that takes 2 number as arguments and returns the lowest. You must not just use Math.min, make your own. */

// Avec un SWITCH :

function max(a, b)
{
    switch(true)
    {
        case(a > b):
            return a;
            break;
        case(b > a):
            return b;
            break;
    }
}

// Avec un IF...ELSE :

function min(a, b)
{
    if(a < b){return a}
    else{return b}
}