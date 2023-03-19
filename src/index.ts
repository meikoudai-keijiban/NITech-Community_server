import "reflect-metadata"
import passport from "passport";
import { createExpressServer, Action } from "routing-controllers";
import { createConnections } from "typeorm"
require('dotenv').config()

import connectionOptions from "./connectionOptions";
import { UserController } from "./controllers/UserController";
import { PostingController } from "./controllers/PostingController";
import { CommentController } from "./controllers/CommentController";
import { User } from "./models/User";
import { BearerStrategy } from "passport-azure-ad";
import { createBearerStrategy } from "./middlewares/createBearerStrategy";

const PORT = process.env.PORT;

const routes = [UserController, PostingController, CommentController];

export default async function main(): Promise<void> {
    try {
        const app = createExpressServer(
            {
                controllers: routes,
                currentUserChecker: (action: Action): User => {
                    return action.request.user as User;
                }
            }
        );

        await createConnections(connectionOptions).then(connection => {
            console.info(`Connected database successfully!`);
        }).catch(error => console.log(error));

        app.use(passport.initialize())
        const bearerStrategy: BearerStrategy = createBearerStrategy();
        passport.use(bearerStrategy)

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
