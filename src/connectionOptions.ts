import "reflect-metadata";
import { ConnectionOptions } from "typeorm";

import { nicDatabaseMigration1684467135533 } from "./migrations/1684467135533-nicDatabaseMigration";
import { Comment } from "./models/Comment";
import { Posting } from "./models/Posting";
import { User } from "./models/User";


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
    migrations: [ nicDatabaseMigration1684467135533 ],
    migrationsRun: true,
}

const connectionOptions: ConnectionOptions[] = [
    databaseConnectionOption,
];

export default connectionOptions;

