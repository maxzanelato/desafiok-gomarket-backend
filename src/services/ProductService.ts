import { getRepository, Like } from 'typeorm';
import Product from '../models/Product';

interface Request {
  providerId: string;
  name: string;
  brand: string;
  price: number;
}

interface Pagination {
  take?: number;
  skip?: number;
  keyword?: string;
}

export default class ProductService {
  public async find(
    pagination: Pagination,
    providerIdParam: string,
  ): Promise<Array<Product>> {
    const productsRepository = getRepository(Product);

    const take = pagination.take || 10;
    const skip = pagination.skip || 0;
    const keyword = pagination.keyword || '';
    const providerId = providerIdParam || '';

    const whereCondition = providerId
      ? {
          name: Like(`%${keyword}%`),
          providerId,
        }
      : {
          name: Like(`%${keyword}%`),
        };

    const result = await productsRepository.find({
      where: whereCondition,
      order: { createdAt: 'DESC' },
      take,
      skip,
    });

    return result;
  }

  public async findById(
    id: string,
    query: Pagination,
  ): Promise<Array<Product>> {
    const productsRepository = getRepository(Product);

    const take = query.take || 10;
    const skip = query.skip || 0;
    const keyword = query.keyword || '';

    const result = await productsRepository.findByIds([id], {
      where: { name: Like(`%${keyword}%`) },
      order: { createdAt: 'DESC' },
      take,
      skip,
    });

    return result;
  }

  async execute({ providerId, name, brand, price }: Request): Promise<Product> {
    const productsRepository = getRepository(Product);

    const product = productsRepository.create({
      providerId,
      name,
      brand,
      price,
    });

    await productsRepository.save(product);

    return product;
  }
}
