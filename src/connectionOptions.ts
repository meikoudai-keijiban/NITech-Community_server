import "reflect-metadata";
import { ConnectionOptions } from "typeorm";

import { User } from "./models/User";
import { Posting } from "./models/Posting";
import { Comment } from "./models/Comment";

import { nicDatabaseMigration1679224123083 } from "./migrations/1679224123083-nicDatabaseMigration";

const databaseConnectionOption: ConnectionOptions = {
    type: "mariadb",
    name: "nicDatabase",
    entities: [User, Posting, Comment],
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    // migrations: ["src/migrations/*.ts"],
    migrations: [nicDatabaseMigration1679224123083],
    migrationsRun: true,
}

const connectionOptions: ConnectionOptions[] = [
    databaseConnectionOption,
];

export default connectionOptions;

