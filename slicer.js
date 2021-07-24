/* Create the slice function that works like Array.slice and String.slice

It takes an additional first argument which is the string or the array. */

function slice(source, start, end)
{
    if(start===undefined){start = 0;}
    if(end===undefined){end = source.length}


    if(start < 0)
    {
        start = -start; 
        start = source.length - start;
    }
    if(end < 0)
    {
        end = -end;
        end = source.length - end;
    }
    let resultStr = "";
    let resultArr = [];

    for (let i = start; i < end; i++)
    {
        if(typeof source === "string"){resultStr += source[i];}
        else if(Array.isArray(source)===true){resultArr.push(source[i]);}
    }
    if(typeof source === "string"){return resultStr;}
    else{return resultArr;}
}

//console.log(slice("abcdef", 0, 2));