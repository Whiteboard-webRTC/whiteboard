import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

import { WhiteboardComponent } from './whiteboard.component';

// enableProdMode();

bootstrap(WhiteboardComponent)
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));
