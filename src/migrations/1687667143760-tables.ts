import { MigrationInterface, QueryRunner } from "typeorm";

export class tables1687667143760 implements MigrationInterface {
    name = 'tables1687667143760'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "deletedAt" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "deletedAt"`);
    }

}
