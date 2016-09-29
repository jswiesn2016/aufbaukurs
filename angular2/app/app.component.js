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
var kitten_component_1 = require("./kittens/kitten.component");
var AppComponent = (function () {
    function AppComponent() {
        this.namen = [
            'Tanja', 'Maria'
        ];
        this.errors = [];
        this.ueberschrift = 'Hallo';
        this.isVisible = true;
        this.selectedName = null;
    }
    AppComponent.prototype.addName = function (name) {
        if (name.length < 2) {
            this.errors.push('Mindestens 2 Zeichen');
            return;
        }
        this.namen.push(name);
    };
    AppComponent.prototype.selectName = function (position) {
        console.log(position);
        this.selectedName = position;
    };
    AppComponent.prototype.deleteName = function (position) {
        this.namen.splice(position, 1);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'templates/app.component.html',
            declarations: [kitten_component_1.KittenComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map