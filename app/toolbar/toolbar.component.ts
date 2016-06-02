import { Component, OnInit } from '@angular/core';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
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
    directives: [MD_TOOLBAR_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})
export class ToolbarComponent implements OnInit {
    
    constructor() { }

    ngOnInit() { }
    
    onEdit(){
        alert("hola");
    }
}