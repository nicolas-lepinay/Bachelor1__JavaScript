/* Create a triangle function that takes a string and a number as parameters
and return a triangle constructed by the string passed as argument and with the depth
of the number passed as argument. */

function triangle(str, n)
{
    let result = "";
    for(let i = 1; i <= n; i++)
    {
        for(let j = 0; j < i; j++)
        {
            result += str;
        }
        if(i === n){return result}
        else{result += "\n"}
    }
    return result;
}

/* console.log(triangle("*", 5))
   >
    *
    **
    ***
    ****
    *****
*/