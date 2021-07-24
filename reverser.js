/* Create a reverse function that works on both arrays and strings. Like .reverse() but working also for strings (without using the actual method). */

function reverse(source)
{
    if(typeof source === "string")
    {
        let result = "";
        for(let i = source.length - 1; i >= 0; i--)
        {
            result += source[i];
        }
        return result;
    }

    else if(typeof source === "object")
    {
        let result = [];
        for(let i = source.length - 1; i >= 0; i--)
        {
            result.push(source[i]);
        }
        return result;
    }
}