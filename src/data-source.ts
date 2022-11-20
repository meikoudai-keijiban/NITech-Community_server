// migration 自動作成に使用
// 詳細は、https://qiita.com/Aurum64/items/f5962bd2a643447dbef9

import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./models/User"
import { Posting } from "./models/Posting"

export const AppDataSource = new DataSource({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "nicDatabase",
    synchronize: true,
    logging: false,
    entities: [User, Posting],
    migrations: ['dist/migrations/*.js'],
})