import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'toolbar',    
    template: `
        <button (click)="onEdit()">Edit</button>
        <button>Functions</button>
        <button>Code</button>
        <button>Draw</button>
    `,
    styles: [
        `button {
            background-color: #ff0;
        }`
    ]
})
export class ToolbarComponent implements OnInit {
    
    constructor() { }

    ngOnInit() { }
    
    onEdit(){
        alert("hola");
    }
}