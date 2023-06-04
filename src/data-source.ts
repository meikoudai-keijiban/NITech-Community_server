// migration 自動作成に使用
// 詳細は、https://qiita.com/Aurum64/items/f5962bd2a643447dbef9
// npx typeorm-ts-node-commonjs migration:generate src/migrations/nicDatabaseMigration -d src/data-source.ts
// npx typeorm-ts-node-commonjs migration:run -d src/data-source.ts


// npx typeorm-ts-node-commonjs migration:generate dist/migrations/nicDatabaseMigration -d dist/data-source.js
// npx typeorm-ts-node-commonjs migration:run -d dist/data-source.js


import "reflect-metadata"
import { DataSource } from "typeorm"
import { Comment } from "./models/Comment"
import { Posting } from "./models/Posting"
import { User } from "./models/User"

export const AppDataSource = new DataSource({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "nicDatabase",
    synchronize: true,
    logging: false,
    entities: [User, Posting, Comment],
    migrations: ['dist/migrations/*.js'],
    // migrations: ['src/migrations/*.ts'],
    // cli: {
    //     "migrationsDir": "migration"
    // }
})