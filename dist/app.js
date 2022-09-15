"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routing_controllers_1 = require("routing-controllers");
require("reflect-metadata");
var UserController_1 = require("./controllers/UserController");
var PORT = 3000;
console.info("Starting server on http://localhost:".concat(PORT));
var routes = [UserController_1.UserController];
var app = (0, routing_controllers_1.createExpressServer)({
    controllers: routes,
});
app.listen(PORT);
//# sourceMappingURL=app.js.map