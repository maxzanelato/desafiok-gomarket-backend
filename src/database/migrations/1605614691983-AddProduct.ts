import { MigrationInterface, QueryRunner } from 'typeorm';

import Product from '../../models/Product';

export default class AddProduct1605614691983 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Product, {
      name: 'Arroz',
      brand: 'Kiarroz',
      price: 250,
      providerId: 'eda4c585-9250-4572-b625-df6206face4b',
      image: '8c06b7cc7fcd006738d7-kiarroz.png',
    });
    await queryRunner.manager.insert(Product, {
      name: 'Melancia',
      brand: 'Horti do tio',
      price: 5,
      providerId: 'eda4c585-9250-4572-b625-df6206face4b',
      image: '8c06b7cc7fcd006738d7-melancia.png',
    });

    await queryRunner.manager.insert(Product, {
      name: 'Feijão marrom',
      brand: 'Tio João',
      price: 100,
      providerId: 'eda4c585-9250-4572-b625-df6206face4b',
      image: '8c06b7cc7fcd006738d7-feijao-marrom.png',
    });

    await queryRunner.manager.insert(Product, {
      name: 'Feijão preto',
      brand: 'Tio João',
      price: 102,
      providerId: 'eda4c585-9250-4572-b625-df6206face4b',
      image: '8c06b7cc7fcd006738d7-feijao-preto.png',
    });

    await queryRunner.manager.insert(Product, {
      name: 'Bolacha recheada',
      brand: 'Trakinas',
      price: 10.5,
      providerId: 'eda4c585-9250-4572-b625-df6206face4b',
      image: '8c06b7cc7fcd006738d7-trakinas.png',
    });

    await queryRunner.manager.insert(Product, {
      name: 'Manga',
      brand: 'Feira de tia',
      price: 5,
      providerId: 'eda4c585-9250-4572-b625-df6206face4b',
      image: '8c06b7cc7fcd006738d7-manga.png',
    });

    await queryRunner.manager.insert(Product, {
      name: 'Bolacha recheada',
      brand: 'Passatempo',
      price: 10,
      providerId: 'eda4c585-9250-4572-b625-df6206face4b',
      image: '8c06b7cc7fcd006738d7-passatempo.png',
    });

    await queryRunner.manager.insert(Product, {
      name: 'Kibom',
      brand: 'Sorvete',
      price: 10,
      providerId: 'eda4c585-9250-4572-b625-df6206face4b',
      image: '8c06b7cc7fcd006738d7-sorvete.png',
    });

    await queryRunner.manager.insert(Product, {
      name: 'Nestle',
      brand: 'Iogurte',
      price: 15,
      providerId: 'eda4c585-9250-4572-b625-df6206face4b',
      image: '8c06b7cc7fcd006738d7-iogurte.png',
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.delete(Product, {
      name: 'Nestle',
      brand: 'Iogurte',
    });

    await queryRunner.manager.delete(Product, {
      name: 'Kibom',
      brand: 'Sorvete',
    });

    await queryRunner.manager.delete(Product, {
      name: 'Bolacha recheada',
      brand: 'Passatempo',
    });

    await queryRunner.manager.delete(Product, {
      name: 'Arroz',
      brand: 'Kiarroz',
    });

    await queryRunner.manager.delete(Product, {
      name: 'Melancia',
      brand: 'Horti do tio',
    });

    await queryRunner.manager.delete(Product, {
      name: 'Feijão marrom',
      brand: 'Tio João',
    });

    await queryRunner.manager.delete(Product, {
      name: 'Feijão preto',
      brand: 'Tio João',
    });

    await queryRunner.manager.delete(Product, {
      name: 'Bolacha recheada',
      brand: 'Trakinas',
    });

    await queryRunner.manager.delete(Product, {
      name: 'Manga',
      brand: 'Feira de tia',
    });
  }
}
