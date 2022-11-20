import "reflect-metadata";
import { ConnectionOptions } from "typeorm";

import { User } from "./models/User";
import { Category } from "./models/Category";
import { Posting } from "./models/Posting";
import { Comment } from "./models/Comment";

const databaseConnectionOption: ConnectionOptions = {
    type: "mariadb",
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: [User, Category, Posting, Comment],
    // migrationsを使え！
    // synchronize: true,
}

const connectionOptions: ConnectionOptions[] = [
    databaseConnectionOption,
];

export default connectionOptions;

