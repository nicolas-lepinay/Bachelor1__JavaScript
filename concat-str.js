// Create a concatStr function that takes 2 arguments and concatenate them:

function concatStr(param1, param2)
{
    return param1.toString() + param2.toString()
}

// On utilise la méthode .toString() pour palier le cas où les paramètres seraient des chiffres.
// concatStr(1, 2) doit renvoyer 12, pas 3.