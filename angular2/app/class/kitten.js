/**
 * Created by cmt on 29.09.2016.
 */
"use strict";
var Kitten = (function () {
    function Kitten(id, name, bild) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = 'Unbekannt'; }
        if (bild === void 0) { bild = ''; }
        this.id = id;
        this.name = name;
        this.bild = bild;
    }
    return Kitten;
}());
exports.Kitten = Kitten;
//# sourceMappingURL=kitten.js.map