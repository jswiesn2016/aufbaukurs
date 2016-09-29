"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by cmt on 29.09.2016.
 */
var core_1 = require('@angular/core');
var kitten_1 = require('../class/kitten');
var KittenComponent = (function () {
    function KittenComponent() {
        this.selectedKitten = null;
        this.kittens = [
            new kitten_1.Kitten(1, 'Copy & Paste', 'https://cdn.meme.am/instances/21589607.jpg'),
            new kitten_1.Kitten(2, 'Magic Numbers', 'https://cdn.meme.am/instances/500x/60820914.jpg')
        ];
        console.log(this.kittens);
    }
    KittenComponent.prototype.selectKitten = function (kitten) {
        console.log(kitten);
        this.selectedKitten = kitten;
    };
    KittenComponent.prototype.addKitten = function () {
        var newKitten = new kitten_1.Kitten(3, 'Neu', '');
        this.kittens.push(newKitten);
        this.selectKitten(newKitten);
    };
    KittenComponent = __decorate([
        core_1.Component({
            selector: 'kitten',
            templateUrl: 'templates/kitten/kitten.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], KittenComponent);
    return KittenComponent;
}());
exports.KittenComponent = KittenComponent;
//# sourceMappingURL=kitten.component.js.map