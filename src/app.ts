import { createExpressServer } from "routing-controllers";
import "reflect-metadata"

import { UserController } from "./controllers/UserController";

const PORT = 3000;

console.info(`Starting server on http://localhost:${PORT}`);

const routes = [ UserController ];

const app = createExpressServer(
    {
        controllers: routes,
    }
);

app.listen(PORT);