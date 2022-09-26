"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const User_1 = require("./models/User");
const Category_1 = require("./models/Category");
const Posting_1 = require("./models/Posting");
const Photo_1 = require("./models/Photo");
const Comment_1 = require("./models/Comment");
const databaseConnectionOptions = {
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "nicDatabase",
    entities: [User_1.User, Category_1.Category, Posting_1.Posting, Photo_1.Photo, Comment_1.Comment],
    synchronize: true,
};
const connectionOptions = [
    databaseConnectionOptions,
];
exports.default = connectionOptions;
