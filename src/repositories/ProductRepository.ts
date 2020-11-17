import { EntityRepository, Repository, Like } from 'typeorm';

import Product from '../models/Product';

interface Pagination {
  take?: number;
  skip?: number;
  keyword?: string;
}

@EntityRepository(Product)
export default class AppointmentsRepository extends Repository<Product> {
  public async findByProviderId(
    providerId: string,
    query: Pagination,
  ): Promise<Product[]> {
    const take = query.take || 8;
    const skip = query.skip || 0;
    const keyword = query.keyword || '';

    const result = await this.find({
      where: { providerId, name: Like(`%${keyword}%`) },
      order: { createdAt: 'DESC' },
      take,
      skip,
    });

    return result || null;
  }
}
