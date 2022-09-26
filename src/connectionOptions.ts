import "reflect-metadata";
import { ConnectionOptions } from "typeorm";

import { User } from "./models/User";
import { Category } from "./models/Category";
import { Posting } from "./models/Posting";
import { Photo } from "./models/Photo";
import { Comment } from "./models/Comment";

const databaseConnectionOptions: ConnectionOptions = {
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "nicDatabase",
    entities: [User, Category, Posting, Photo, Comment],
    synchronize: true,
}

const connectionOptions: ConnectionOptions[] = [
    databaseConnectionOptions,
];

export default connectionOptions;

