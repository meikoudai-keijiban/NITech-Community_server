import "reflect-metadata"
import passport from "passport";
import { BearerStrategy } from "passport-azure-ad";
import { createExpressServer, Action } from "routing-controllers";
import { createConnections } from "typeorm"
import 'dotenv/config'

import connectionOptions from "./connectionOptions";
import { CommentController } from "./controllers/CommentController";
import { PostingController } from "./controllers/PostingController";
import { UserController } from "./controllers/UserController";
import { createBearerStrategy } from "./middlewares/createBearerStrategy";
import { User } from "./models/User";

const PORT: string | undefined = process.env.PORT;

const routes = [UserController, PostingController, CommentController];

export default async function main(): Promise<void> {
    if (!PORT) {
        throw new Error("Port is undefined")
    }

    try {
        const app: any = createExpressServer(
            {
                controllers: routes,
                currentUserChecker: (action: Action): User => {
                    return action.request.user as User;
                }
            }
        );

        await createConnections(connectionOptions).then(() => {
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
