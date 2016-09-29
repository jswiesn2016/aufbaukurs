/**
 * Created by cmt on 29.09.2016.
 */
import { Component } from '@angular/core';
import {KittenComponent} from "./kittens/kitten.component";
@Component({
    selector: 'my-app',
    templateUrl: 'templates/app.component.html',
    declarations: [KittenComponent]
})

export class AppComponent {
    namen:Array<string> = [
        'Tanja', 'Maria'
    ];

    errors:Array<string> = [];

    ueberschrift:string = 'Hallo';

    isVisible:boolean = true;

    selectedName:Number = null;

    addName(name) {
        if (name.length < 2) {
            this.errors.push('Mindestens 2 Zeichen');
            return;
        }

        this.namen.push(name);
    }

    selectName(position) {
        console.log(position);
        this.selectedName = position;
    }

    deleteName(position){
        this.namen.splice(position, 1);
    }
}