/**
 * Created by cmt on 27.09.2016.
 */

// Funktion
function test(){
    return 42;
}

// Klasse
                    // Konstruktor
var Auto = function(hersteller, modell, ps){
    // Instanzvariablen
    this.hersteller = hersteller;
    this.modell = modell;
    this.ps = ps;

    // In der Instanz ist es da, aber nicht über AUto
    this.hubraum = 120;

    this.sitze = 3;

    // Methoden
    this.toString = function() {
        return this.hersteller + ' ' + this.modell;
    };

    this.fahren = function() {
        return Math.random() * this.ps;
    };

    this.getSinn = function () {
        return 42;
    }
};

console.log(Auto.hubraum);

// Statische Variable zuweisen
Auto.reifen = 4;
Auto.getSinn = function() {
    return 42;
};

// Ein Objekt der Klasse Auto
var bmw = new Auto('BMW', '5er', 160);

document.write(bmw);

document.write('<hr />');
document.write(Auto.reifen);
document.write('<hr />');
document.write(Auto.getSinn());
document.write('<hr />');

// Dynamisach erweitern
bmw.farbe = 'Grün';

console.log(bmw);

console.log(Auto.hersteller);


// Ein Objekt
var bmwObject = {
    // Variabeln -> Instanzvariablen
    hersteller: 'bmw',
    model: '3er',
    ps: 120,

    // Methode
    toString: function(){
        return this.hersteller + ' ' + this.model;
    },

    fahren: function() {
        return Math.random() * this.ps;
    }
};

console && console.log(bmw);

document.write(bmw.toString());
document.write('<br />');
document.write(bmw.fahren());
document.write('<br />');

// Ganz schlechter Stil
bmw.farbe = 'blau';

document.write(bmw.farbe);
document.write('<br />');

// Behandlung als Assioziatives Array
var ps = 'ps';

document.write(bmw[ps]);
document.write('<br />');

// document.write();

document.write(bmw.fahren);

for(b in bmw)
{
    if (typeof bmw[b] == 'function')
    {
        continue;
    }

    console.log(bmw[b]);
}

// Ein Objekt
var audi = {
    // Variabeln -> Instanzvariablen
    hersteller: 'Audi',
    model: '7er',
    ps: 250,

    // Methode
    toString: function(){
        return this.hersteller + ' ' + this.model;
    },

    fahren: function() {
        return Math.random() * this.ps;
    }
};
