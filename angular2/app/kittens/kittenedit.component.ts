/**
 * Created by cmt on 29.09.2016.
 */
import {Component, Input} from '@angular/core';
import { Kitten } from '../class/kitten';

@Component({
    selector: 'kitten-edit',
    templateUrl: 'templates/kitten/kittenedit.component.html'
})

export class KittenEditComponent {

    @Input('selectedKitten')
    kitten:Kitten = null;
}
