/**
 * Created by cmt on 28.09.2016.
 */

class Kfz {
    constructor(ps){
        this.ps = ps;
    };

    fahren = () => {
        return this.ps * Math.random();
    }
}

class Auto extends Kfz {}

class Lkw extends Kfz {
    constructor(ps){
        super(ps);
    };

    fahren = () => {
        return this.ps / 8 * Math.random();
    }
}

let man = new Lkw(800);

console.log(man.fahren());

