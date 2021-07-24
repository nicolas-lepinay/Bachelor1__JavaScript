// Round arrondit un nombre à l'unité la plus proche (exemple : 5.6 => 6) :
function round(n)
{
    let mod;
    let result;
    let isNegative = false;

    if(n<0){n = -n; isNegative = true;}

    mod = n % 1;
    if(mod >= 0.5){result = n + 1 - mod;}
    else if(mod < 0.5){result = n - mod}

    if(isNegative){result = -result;}
    return result;
}

// Floor renvoie la plus grande unité inférieur ou égale au nombre (exemple : -6.1 => -7) :
function floor(n)
{
    let isNegative = false;

    if(n<0){n = -n; n++; isNegative = true;}
    n = n - (n % 1);
    if(isNegative){n = -n;}
    return n;
}

// Trunc arrondit un nombre à l'unité basse (supprime les décimales) (exemple : 5.84 => 5) :
const trunc = (n) => n - (n % 1);

// Ceil arrondit un nombre à l'unité haute (exemple : 7.05 => 8) :
function ceil(n)
{
    let mod = n % 1;
    if(n < 0){n--;}
    if(mod !==0){return n - (n % 1) + 1}
    else{return n}
}


//console.log(ceil(-7.004));
