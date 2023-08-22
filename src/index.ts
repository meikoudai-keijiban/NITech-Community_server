import "reflect-metadata"
import passport from "passport";
import { BearerStrategy } from "passport-azure-ad";
import { createExpressServer, Action } from "routing-controllers";
import 'dotenv/config'

import { CommentController } from "./controllers/CommentController";
import { PostingController } from "./controllers/PostingController";
import { UserController } from "./controllers/UserController";
import { createBearerStrategy } from "./middlewares/createBearerStrategy";
import { User } from "./models/User";
import { nitechCommunityDataSource } from "./nitechCommunityDataSource";

const PORT: string | undefined = process.env.PORT;

const routes = [UserController, PostingController, CommentController];

export default async function main(): Promise<void> {
    if (!PORT) {
        throw new Error("Port is undefined")
    }

    try {
        const app = createExpressServer( // eslint-disable-line @typescript-eslint/no-unsafe-assignment
            {
                controllers: routes,
                currentUserChecker: (action: Action): User => {
                    return action.request.user as User; // eslint-disable-line @typescript-eslint/no-unsafe-member-access
                }
            }
        );

        await Promise.all([ //Promise.allを使って，データベース接続の並列処理
            nitechCommunityDataSource.initialize(),
        ])
            .then(()=>console.log("Data Source has been initialized!"))
            .catch((error) => console.error("Error during Data Source initialization", error));

        app.use(passport.initialize()) // eslint-disable-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        const bearerStrategy: BearerStrategy = createBearerStrategy();
        passport.use(bearerStrategy)

        app.listen(PORT, () => { // eslint-disable-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            console.info(`Starting server on http://localhost:${PORT}`);
        });

        return;
    } catch (e) {
        console.error(e);

        return;
    }
}

void main();
