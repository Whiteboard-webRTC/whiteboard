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
const core_1 = require('@angular/core');
const toolbar_1 = require('@angular2-material/toolbar');
const button_1 = require('@angular2-material/button');
let ToolbarComponent = class ToolbarComponent {
    constructor() {
    }
    ngOnInit() { }
    onEdit() {
        alert("hola");
    }
};
ToolbarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'toolbar',
        template: `
    <md-toolbar>
        <span>Whiteboard</span> 
        <!-- This fills the remaining space of the current row -->
        <span class="sep"></span>
        
        <span>
            <button md-raised-button color="primary">Share</button>
        </span>
    </md-toolbar>
    `,
        styles: [
            `.sep {
            flex: 1 1 auto;
        }`
        ],
        directives: [toolbar_1.MD_TOOLBAR_DIRECTIVES, button_1.MD_BUTTON_DIRECTIVES]
    }), 
    __metadata('design:paramtypes', [])
], ToolbarComponent);
exports.ToolbarComponent = ToolbarComponent;
//# sourceMappingURL=toolbar.component.js.map