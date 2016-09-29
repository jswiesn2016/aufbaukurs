/**
 * Created by cmt on 29.09.2016.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {FormsModule} from "@angular/forms";
import {KittenComponent} from "./kittens/kitten.component";
import {KittenEditComponent} from "./kittens/kittenedit.component";

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [
        AppComponent,
        KittenComponent,
        KittenEditComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }