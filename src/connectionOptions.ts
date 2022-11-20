import "reflect-metadata";
import { ConnectionOptions } from "typeorm";

import { User } from "./models/User";
import { Posting } from "./models/Posting";

const databaseConnectionOption: ConnectionOptions = {
    type: "mariadb",
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: [User, Posting],
    // migrationsを使え！
    // synchronize: true,
}

const connectionOptions: ConnectionOptions[] = [
    databaseConnectionOption,
];

export default connectionOptions;

