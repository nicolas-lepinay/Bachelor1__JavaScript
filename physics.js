/* Isaac Newton has forgotten his laws of physics and needs your help to animate an object on his game.
He must use the Second Law of Motion that states, when the forces acting on an object are unbalanced, the object will accelerate.
This acceleration is dependent upon the force that act upon the object and the object's mass.

So he wants to know for an object with... :

    mass of xx
    Δv of xx
    Δt of xx
    force of xx
    distance xx
    time xx

...what is the acceleration of that object.

Create a function called getAcceleration that given an object with the values of { f: 10, m: 5, Δv: 100, Δt: 50, t:1, d: 10 }
it must calculate the acceleration. If its not possible to calculate it you must return impossible.

Formulas :
a = F/m
a = Δv/Δt
a = 2d/t^2

a = acceleration
F = force
Δv = final velocity - initial velocity
Δt = final time - initial time
d = distance
t = time
*/

function getAcceleration(myObject)
{
    let f = myObject.f;
    let m = myObject.m;
    let Δv = myObject.Δv;
    let Δt = myObject.Δt;
    let t = myObject.t;
    let d = myObject.d;
    
    if(f!==undefined && m!==undefined)
    {
        return f/m;
    }
    else if(Δv!==undefined && Δt!==undefined)
    {
        return Δv/Δt;
    }
    else if(t!==undefined && d!==undefined)
    {
        return (2*d)/(t ** 2);
    }
    else 
    {
        return "impossible";
    }

}

// Pour s'assurer que la fonction renvoie "Impossible" également dans le cas où les valeurs seraient définies mais égales à autre chose qu'un nombre (string, bool, etc.),
// on pourrait écrire : if(typeof(f) == 'number' && typeof(m) == 'number') ...