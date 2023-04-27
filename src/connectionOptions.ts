import "reflect-metadata";
import { ConnectionOptions } from "typeorm";

import { User } from "./models/User";
import { Posting } from "./models/Posting";
import { Comment } from "./models/Comment";

import { nicDatabaseMigration1680241228245 } from "./migrations/1680241228245-nicDatabaseMigration";

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
    migrations: [nicDatabaseMigration1680241228245],
    migrationsRun: true,
}

const connectionOptions: ConnectionOptions[] = [
    databaseConnectionOption,
];

export default connectionOptions;

