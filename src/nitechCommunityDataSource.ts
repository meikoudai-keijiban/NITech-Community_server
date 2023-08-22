// migration 自動作成に使用
// 詳細は、https://qiita.com/Aurum64/items/f5962bd2a643447dbef9
// npx typeorm-ts-node-commonjs migration:generate src/migrations/nicDatabaseMigration -d src/data-source.ts
// npx typeorm-ts-node-commonjs migration:run -d src/data-source.ts


// npx typeorm-ts-node-commonjs migration:generate dist/migrations/nicDatabaseMigration -d dist/data-source.js
// npx typeorm-ts-node-commonjs migration:run -d dist/data-source.js


import "reflect-metadata"
import { DataSource } from "typeorm"
import { nicDatabaseMigration1684467135533 } from "./migrations/1684467135533-nicDatabaseMigration";
import { Comment } from "./models/Comment"
import { Posting } from "./models/Posting"
import { User } from "./models/User"


export const nitechCommunityDataSource = new DataSource({
    type: "mariadb",
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    synchronize: true,
    logging: false,
    entities: [User, Posting, Comment],
    migrations: [nicDatabaseMigration1684467135533],
    // migrations: ['src/migrations/*.ts'],
    // cli: {
    //     "migrationsDir": "migration"
    // }
})