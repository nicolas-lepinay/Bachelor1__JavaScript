/* Create a isPositive function that takes a number as parameter and return true if the given number is stricly positive, or false otherwise
Create the abs function that takes one number argument and returns its absolute value.
You are not allowed to use Math.abs, make your own. */

function isPositive(nbr)
{
    return nbr > 0; // équivalent à : if(nbr >0) {return true;}
}

function abs(nbr)
{
    return nbr <= 0 ? -nbr : nbr; // Est-ce que nbr <= 0 ? Si oui, return -nbr, sinon return nbr.
}



/*
function abs(nbr)
{
    switch(true)
    {
        case(nbr>=0):
            return nbr;
            break;
        case (nbr<=0):
            let nbrString = nbr.toString();
            let absoluteValue = nbrString.slice(1);
            let absoluteValueFloat = parseFloat(absoluteValue);
            return absoluteValueFloat;
            break;
    }
}
*/