"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
var Kangourou_1 = require("./animals/Kangourou");
var Main = /** @class */ (function () {
    function Main(zooName) {
        this.zooName = zooName;
        this.allKangourous = [];
        this.allGirages = [];
    }
    Main.prototype.addKangourou = function (kangourou) {
        var itExists;
        itExists = this.allKangourous.some(function (k) {
            k.name === kangourou.name;
        });
        if (itExists) {
            console.log("kangourou already exists");
            return;
        }
        this.allKangourous.push(kangourou);
        console.log("".concat(kangourou.name, " has been successfully added"));
    };
    Main.prototype.showKangourou = function () {
        var copy = this.allKangourous;
        return copy;
    };
    return Main;
}());
exports.Main = Main;
var sevranZoo = new Main("sevran");
var kangourou = new Kangourou_1.Kangourou("kaaris", 2, 1);
sevranZoo.addKangourou(kangourou);
console.log(sevranZoo.showKangourou());
