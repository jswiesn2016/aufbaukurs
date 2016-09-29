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
var KittenEditComponent = (function () {
    function KittenEditComponent() {
        this.kitten = null;
    }
    __decorate([
        core_1.Input('selectedKitten'), 
        __metadata('design:type', kitten_1.Kitten)
    ], KittenEditComponent.prototype, "kitten", void 0);
    KittenEditComponent = __decorate([
        core_1.Component({
            selector: 'kitten-edit',
            templateUrl: 'templates/kitten/kittenedit.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], KittenEditComponent);
    return KittenEditComponent;
}());
exports.KittenEditComponent = KittenEditComponent;
//# sourceMappingURL=kittenedit.component.js.map