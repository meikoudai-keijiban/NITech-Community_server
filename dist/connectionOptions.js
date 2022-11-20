"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const User_1 = require("./models/User");
const Category_1 = require("./models/Category");
const Posting_1 = require("./models/Posting");
const Comment_1 = require("./models/Comment");
const databaseConnectionOption = {
    type: "mariadb",
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: [User_1.User, Category_1.Category, Posting_1.Posting, Comment_1.Comment],
    // migrationsを使え！
    // synchronize: true,
};
const connectionOptions = [
    databaseConnectionOption,
];
exports.default = connectionOptions;
