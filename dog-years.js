/* Someone once said that a dog makes 7 years for each human year.

Create a dogYears function that if given a planet name and an age in seconds, calculates how old a dog would be on the given planet.

    earth : orbital period 1.0 Earth years, 365.25 Earth days, or 31,557,600 seconds
    mercury : orbital period 0.2408467 Earth years
    venus : orbital period 0.61519726 Earth years
    mars : orbital period 1.8808158 Earth years
    jupiter : orbital period 11.862615 Earth years
    saturn : orbital period 29.447498 Earth years
    uranus : orbital period 84.016846 Earth years
    neptune : orbital period 164.79132 Earth years

So if you were told someone that their dog were 1,000,000,000 seconds old, you should be able to say that the dog is 221.82 Earth-years old.
You will have to format the number so that the result is rounded like the example above. */


function Planet(nom, période)
{
    this.name = nom;
    this.period = période;
}

var earth = new Planet("earth", 1.0);
var mercury = new Planet("mercury", 0.2408467);
var venus = new Planet("venus", 0.61519726);
var mars = new Planet("mars",  1.8808158);
var jupiter = new Planet("jupiter", 11.862615);
var saturn = new Planet("saturn", 29.447498);
var uranus = new Planet("uranus", 84.016846);
var neptune = new Planet("neptune", 164.79132);


function dogYears(planetStr, age)
{
    // Le site Ytrack teste la fonction dogYears en passant le nom des planètes comme des strings ("earth", "mercury", etc. Or, chez moi, ce sont des objets, donc sans guillemets).
    // J'utilise donc la fonction eval() pour transformer les strings en code brut (donc "earth" devient --> earth, ce qui correspond à un objet dans mon code) :
    let planet = eval(planetStr);
    let result = age/(planet["period"]*31557600/7);
    let result2 = result.toFixed(2); // La méthode .toFixed(2) permet d'arrondir un nombre à deux décimales.
    let result2Float = parseFloat(result2); // La ligne précédente me renvoyait un int, or il nous faut un float pour réussir le teste Ytrack.
    return result2Float;
}