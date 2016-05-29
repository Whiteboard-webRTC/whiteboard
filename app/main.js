"use strict";
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
const whiteboard_component_1 = require('./whiteboard.component');
// enableProdMode();
platform_browser_dynamic_1.bootstrap(whiteboard_component_1.WhiteboardComponent)
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));
//# sourceMappingURL=main.js.map