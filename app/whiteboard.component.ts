import { Component, OnInit } from '@angular/core';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { WhiteboardService } from './whiteboard.service';

@Component({
    moduleId: module.id,
    selector: 'whiteboard',
    templateUrl: 'whiteboard.component.html',
    directives: [ToolbarComponent],
    providers: [WhiteboardService]
})
export class WhiteboardComponent implements OnInit {

    constructor(private whiteboardService : WhiteboardService) {
      
    }

    ngOnInit() { }

}
