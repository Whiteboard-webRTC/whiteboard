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
const toolbar_component_1 = require('./toolbar/toolbar.component');
const whiteboard_service_1 = require('./whiteboard.service');
let WhiteboardComponent = class WhiteboardComponent {
    constructor(whiteboardService) {
        this.whiteboardService = whiteboardService;
    }
    ngOnInit() { }
};
WhiteboardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'whiteboard',
        templateUrl: 'whiteboard.component.html',
        directives: [toolbar_component_1.ToolbarComponent],
        providers: [whiteboard_service_1.WhiteboardService]
    }), 
    __metadata('design:paramtypes', [whiteboard_service_1.WhiteboardService])
], WhiteboardComponent);
exports.WhiteboardComponent = WhiteboardComponent;
//# sourceMappingURL=whiteboard.component.js.map