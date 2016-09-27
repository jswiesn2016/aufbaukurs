/**
 * Created by cmt on 27.09.2016.
 */

var Schnecke = function(name, rasse, maxGeschw)
{
    this.name = name;
    this.rasse = rasse;
    this.maxGeschw = maxGeschw || 0;
    this.position = 0;

    this.krieche = function(){
        this.position += Math.random() * this.maxGeschw;
    };

    this.toString = function() {
        return this.name + ' ' + this.position;
    };
};

var Rennen = function(name, laenge)
{
    this.name = name;
    this.laenge = laenge;
    this.teilnehmer = [];
    this.anzahlTeilnehmer = 0;

    this.addSchnecke = function(schnecke) {
        this.teilnehmer.push(schnecke);
        this.anzahlTeilnehmer++;
    };

    /**
     *
     * @param {string} name
     */
    this.removeSchnecke = function(name) {
        for (i = 0; i < this.anzahlTeilnehmer; i+=1)
        {
            /** @var {Schnecke} */
            sn = this.teilnehmer[i];

            if (sn.name == name) {
                // Schnecke gefunden!
                this.teilnehmer.splice(i, 1);
            }
        }
    };

    this.ermittleGewinner = function() {
        // Schauen ob ein Teilnehmer > laenge ist
        for (var i = 0; i < this.anzahlTeilnehmer; i++)
        {
            if (this.teilnehmer[i].position >= this.laenge)
            {
                // Yey gewinner
                return this.teilnehmer[i];
            }
        }

        // Noch kein Gewinner
        return null;
    };

    this.lasseSchneckenKriechen = function() {
        for (var i = 0; i < this.anzahlTeilnehmer; i++)
        {
            console.log(this.teilnehmer);
            this.teilnehmer[i].krieche();
        }
    };

    this.durchfuehren = function() {
        while (this.ermittleGewinner() == null)
        {
            this.lasseSchneckenKriechen();
        }

        return this.ermittleGewinner();
    };

    this.printErgebnis = function() {
        for (var i = 0; i < this.anzahlTeilnehmer; i++)
        {
            var MAX_HASHTAG = 50;
            var count = MAX_HASHTAG;

            document.write(this.teilnehmer[i].name + ':\t');

            count = count * (this.teilnehmer[i].position / this.laenge);

            for (var j = 0; j < count; j++)
            {
                document.write('#');
            }

            document.write('<br />');
        }
    }
};

// var nuerburg = new Rennen('Nürburg', 100);
//
// // Schnecken hinzufügen
// var rudi = new Schnecke('Rudi', 'Weinberg', 10);
// var maria = new Schnecke('Maria', 'Weinberg', 11);
// var fritz = new Schnecke('Fritz', 'Weinberg', 12);
//
// nuerburg.addSchnecke(rudi);
// nuerburg.addSchnecke(maria);
// nuerburg.addSchnecke(fritz);
//
// // Rennen durchführen
// /** @var {Schnecke} */
// var gewinner = nuerburg.durchfuehren();
//
// document.write('Gewinner ' + gewinner.name);
// document.write('<hr />');
//
// nuerburg.printErgebnis();