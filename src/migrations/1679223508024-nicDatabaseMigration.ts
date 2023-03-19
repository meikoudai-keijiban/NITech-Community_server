import { MigrationInterface, QueryRunner } from "typeorm";

export class nicDatabaseMigration1679223508024 implements MigrationInterface {
    name = 'nicDatabaseMigration1679223508024'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`comment\` (\`id\` int NOT NULL AUTO_INCREMENT, \`postDate\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(), \`content\` varchar(255) NOT NULL, \`createdAt\` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`postingId\` int NULL, \`authorId\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`posting\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`postDate\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(), \`content\` varchar(255) NOT NULL, \`createdAt\` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`authorId\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`department\` varchar(255) NOT NULL, \`createdAt\` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`comment\` ADD CONSTRAINT \`FK_a9e98277326c15149cadaeb6ed7\` FOREIGN KEY (\`postingId\`) REFERENCES \`posting\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`comment\` ADD CONSTRAINT \`FK_276779da446413a0d79598d4fbd\` FOREIGN KEY (\`authorId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`posting\` ADD CONSTRAINT \`FK_3cdf27a4bd3df2378a8227eb8f6\` FOREIGN KEY (\`authorId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`posting\` DROP FOREIGN KEY \`FK_3cdf27a4bd3df2378a8227eb8f6\``);
        await queryRunner.query(`ALTER TABLE \`comment\` DROP FOREIGN KEY \`FK_276779da446413a0d79598d4fbd\``);
        await queryRunner.query(`ALTER TABLE \`comment\` DROP FOREIGN KEY \`FK_a9e98277326c15149cadaeb6ed7\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`posting\``);
        await queryRunner.query(`DROP TABLE \`comment\``);
    }

}
