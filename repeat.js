/* Create a repeat function that takes a string and a number as parameters and return the repeated string by the given number, like the method .repeat
Of course you may not use the method directly. */

function repeat(str, n)
{
    const strOne = str;

    if(n === 0){return ""}
    else if(n === 1){return str}
    else
    {
        while(n>1)
        {
            n--;
            str+=strOne;
        }
        return str;
    }
}