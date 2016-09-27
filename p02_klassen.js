/**
 * Created by cmt on 27.09.2016.
 */

var Kunde = function(vorname, nachname, alter)
{
    this.vorname = vorname;
    this.nachname = nachname;
    this.alter = alter;

    this.printKunde = function() {
        document.write(this.vorname + ' ' + this.nachname + '<br />');
    }
};

var ar = [];


// Objekt
var tanja = new Kunde('Tanja', 'Förderer', 23);

// Kunde.prototype.constructor.address = 'Teststr. 22';

// console.log(Kunde.prototype.constructor);


var test = function (kunde) {
    ar.push(kunde);
;}

Kunde.prototype.nationalitaet = 'Deutsch';

document.write(tanja.nationalitaet);

var bernd = new Kunde('Bernd', 'Huber', 28);

test(bernd);


console.log(typeof Math);
// console.log(typeof bernd);

tanja.printKunde();
bernd.printKunde();

bernd.nationalitaet = 'Irisch';

document.write(bernd.nationalitaet);
document.write(Kunde.address);

console.log(tanja);
console.log(bernd);

var Helper = {
};

// Statische Variable
Helper.PI = 3.14159;

Helper.addiere = function(zahl1, zahl2) {
    return zahl1 + zahl2;
};

document.write(Helper.PI);

Helper.addiere(20, 22);

