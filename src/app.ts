import "reflect-metadata"
import { createExpressServer } from "routing-controllers";
import { createConnections } from "typeorm"

import connectionOptions from "./connectionOptions";
import { UserController } from "./controllers/UserController";

const PORT = 3000;

const routes = [UserController];

export default async function main(): Promise<void> {
    try {
        const app = createExpressServer(
            {
                controllers: routes,
            }
        );

        await createConnections(connectionOptions).then(connection => {
            console.info(`Connected database successfully!`);
        }).catch(error => console.log(error));

        app.listen(PORT, () => {
            console.info(`Starting server on http://localhost:${PORT}`);
        });

        return;
    } catch (e) {
        console.error(e);

        return;
    }
}

void main();
