/**
 * Created by cmt on 29.09.2016.
 */
import { Component } from '@angular/core';
import { Kitten } from '../class/kitten';

@Component({
    selector: 'kitten',
    templateUrl: 'templates/kitten/kitten.component.html'
})

export class KittenComponent {
    selectedKitten:Kitten = null;

    kittens:Array<Kitten>;

    constructor() {
        this.kittens = [
            new Kitten(
                1,
                'Copy & Paste',
                'https://cdn.meme.am/instances/21589607.jpg'
            ),
            new Kitten(
                2,
                'Magic Numbers',
                'https://cdn.meme.am/instances/500x/60820914.jpg'
            )
        ];

        console.log(this.kittens);
    }

    selectKitten(kitten) {
        console.log(kitten);
        this.selectedKitten = kitten;
    }

    addKitten() {
        var newKitten = new Kitten(
            3,
            'Neu',
            ''
        );

        this.kittens.push(newKitten);

        this.selectKitten(newKitten);
    }
}
