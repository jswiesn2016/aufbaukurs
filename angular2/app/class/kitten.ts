/**
 * Created by cmt on 29.09.2016.
 */

export class Kitten
{
    public id:number;
    public name:string;
    public bild:string;

    constructor(id = 0, name = 'Unbekannt', bild = ''){
        this.id = id;
        this.name = name;
        this.bild = bild;
    }
}