"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const typeorm_1 = require("typeorm");
const connectionOptions_1 = __importDefault(require("./connectionOptions"));
const UserController_1 = require("./controllers/UserController");
const PORT = 3000;
const routes = [UserController_1.UserController];
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const app = (0, routing_controllers_1.createExpressServer)({
                controllers: routes,
            });
            yield (0, typeorm_1.createConnections)(connectionOptions_1.default).then(connection => {
                console.info(`Connected database successfully!`);
            }).catch(error => console.log(error));
            app.listen(PORT, () => {
                console.info(`Starting server on http://localhost:${PORT}`);
            });
            return;
        }
        catch (e) {
            console.error(e);
            return;
        }
    });
}
exports.default = main;
void main();
