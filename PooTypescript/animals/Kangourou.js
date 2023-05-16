"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kangourou = void 0;
var Animal_1 = require("./Animal");
var Kangourou = /** @class */ (function (_super) {
    __extends(Kangourou, _super);
    function Kangourou(name, legs, height) {
        var _this = _super.call(this, name, legs) || this;
        _this.height = height;
        return _this;
    }
    Kangourou.prototype.move = function () {
        console.log("".concat(this.name, " has moved"));
    };
    return Kangourou;
}(Animal_1.Animal));
exports.Kangourou = Kangourou;
