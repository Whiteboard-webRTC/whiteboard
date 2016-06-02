"use strict";
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
const http_1 = require('@angular/http');
const whiteboard_component_1 = require('./whiteboard.component');
// enableProdMode();
platform_browser_dynamic_1.bootstrap(whiteboard_component_1.WhiteboardComponent, [http_1.HTTP_PROVIDERS])
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));
//# sourceMappingURL=main.js.map