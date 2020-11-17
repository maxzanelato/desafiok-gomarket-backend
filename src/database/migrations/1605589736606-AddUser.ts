import { MigrationInterface, QueryRunner } from 'typeorm';

import User from '../../models/User';

export default class AddUser1605589736606 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(User, {
      id: 'eda4c585-9250-4572-b625-df6206face4b',
      name: 'Max Zanelato',
      email: 'maxzanelato@gmail.com',
      password: '$2a$08$y9.jFsctTYRSu6PO44YnmudYnk18PBf3.xSWxdVc5XF8mZtZIVGnq',
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.delete(User, {
      email: 'maxzanelato@gmail.com',
    });
  }
}
