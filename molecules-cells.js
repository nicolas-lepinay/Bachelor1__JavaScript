/* Write two functions:

    RNA that given a DNA strand it must return is complement RNA
    DNA that given a RNA strand it must return is complement DNA (invert RNA)

Since both strands are a sequence of nucleotides. It will be given the four nucleotides and its complements

DNA | RNA
 G  -  C
 C  -  G
 T  -  A
 A  -  U
 */

function RNA(strand)
{
    let result = "";

    for (let i = 0; i < strand.length; i++)
    {
        if(strand[i] === "G"){result += "C"}
        if(strand[i] === "C"){result += "G"}
        if(strand[i] === "T"){result += "A"}
        if(strand[i] === "A"){result += "U"}
    }
    return result;
}

function DNA(strand)
{
    let result = "";

    for (let i = 0; i < strand.length; i++)
    {
        if(strand[i] === "C"){result += "G"}
        if(strand[i] === "G"){result += "C"}
        if(strand[i] === "A"){result += "T"}
        if(strand[i] === "U"){result += "A"}
    }
    return result;
}