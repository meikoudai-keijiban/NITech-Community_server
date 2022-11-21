import { MigrationInterface, QueryRunner } from "typeorm";

export class nicDatabaseMigration1669036601523 implements MigrationInterface {
    name = 'nicDatabaseMigration1669036601523'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` varchar(255) NOT NULL, \`nitechUserId\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`posting\` (\`id\` varchar(255) NOT NULL, \`title\` varchar(255) NOT NULL, \`postDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`content\` varchar(255) NOT NULL, \`authorId\` varchar(255) NULL, UNIQUE INDEX \`REL_3cdf27a4bd3df2378a8227eb8f\` (\`authorId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`posting\` ADD CONSTRAINT \`FK_3cdf27a4bd3df2378a8227eb8f6\` FOREIGN KEY (\`authorId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`posting\` DROP FOREIGN KEY \`FK_3cdf27a4bd3df2378a8227eb8f6\``);
        await queryRunner.query(`DROP INDEX \`REL_3cdf27a4bd3df2378a8227eb8f\` ON \`posting\``);
        await queryRunner.query(`DROP TABLE \`posting\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
