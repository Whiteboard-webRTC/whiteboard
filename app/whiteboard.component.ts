import { Component, OnInit } from '@angular/core';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { WhiteboardService } from './whiteboard.service';

@Component({
    selector: 'whiteboard',
    template: `
        <form>
            <textarea [(ngModel)]="myID" rows="15"></textarea> <br/>
            <textarea [(ngModel)]="yourID" rows="15"></textarea> <br/>
            <button (click)="connect()">connect</button><br/><br/>
            
            <input type="text" [(ngModel)]="msg" /><button (click)="send(msg)">send</button><br/>
            <ul>
                <li *ngFor="let message of messages">{{ message }}</li>
            </ul>
            
    `,
    //directives: [ToolbarComponent],
    providers: [WhiteboardService]
})
export class WhiteboardComponent implements OnInit {
    myID: string; yourID: string; peer; messages:Array<String>;
    
    constructor(private whiteboardService : WhiteboardService) {
        this.peer = whiteboardService.getPeer({ initiator: location.hash == "#ini" });
        this.messages = new Array();
        
        this.peer.on('signal', (data)=>{
            this.myID = JSON.stringify(data);
        });
        
        this.peer.on('data', (data) => this.messages.push(data));
    }
    
    connect(){
        this.peer.signal(JSON.parse(this.yourID));
    }
    
    send(msg){
        this.peer.send(msg);
    }

    ngOnInit() { }

}