"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\t<header>\n\t\t<nav class=\"navbar navbar-inverse\">\n\t\t\t<div class=\"navbar-header\">\n\t\t\t\t<a href=\"/\" class=\"navbar-brand\">My Angular 2 App!</a>\n\t\t\t</div>\n\t\t</nav>\n\t</header>\n\n\t\t<div class=\"jumbotron\">\n\t\t\t<h1>Welcome to Our App!</h1>\t\n\t\t</div>\n\n\t\t<footer class=\"text-center\">\n\t\t\tCopyright &copy; 2016\n\t\t</footer>\n\t",
        styles: [
            ".jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }\n\t"
        ]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map