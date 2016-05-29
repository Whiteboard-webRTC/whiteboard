import { Injectable } from '@angular/core';

import SimplePeer = require('simple-peer');

@Injectable()
export class WhiteboardService {
    
    constructor() {
        
    }
    
    getPeer(args) {
        return new SimplePeer(args);
    }

}