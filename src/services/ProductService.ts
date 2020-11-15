import { getRepository, getCustomRepository, Like } from 'typeorm';

import ProductRepository from '../repositories/ProductRepository';

import Product from '../models/Product';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  providerId: string;
  name: string;
  brand: string;
  price: number;
}

interface UpdateRequest extends Request {
  id: string;
}

interface Pagination {
  take?: number;
  skip?: number;
  keyword?: string;
}

export default class ProductService {
  public async find(pagination: Pagination): Promise<Array<Product>> {
    const productsRepository = getRepository(Product);

    const take = pagination.take || 10;
    const skip = pagination.skip || 0;
    const keyword = pagination.keyword || '';

    const result = await productsRepository.find({
      where: { name: Like(`%${keyword}%`) },
      order: { createdAt: 'DESC' },
      take,
      skip,
    });

    return result;
  }

  public async findById(id: string): Promise<Product> {
    const productsRepository = getRepository(Product);

    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Product not found!', 400);
    }

    return product;
  }

  public async findByProviderId(
    providerId: string,
    query: Pagination,
  ): Promise<Array<Product>> {
    const productsRepository = getCustomRepository(ProductRepository);
    const userRepository = getRepository(User);

    const user = await userRepository.findOne(providerId);

    if (!user) {
      throw new AppError(
        'Only authenticated users can recovery own products!',
        401,
      );
    }

    const result = await productsRepository.findByProviderId(providerId, query);

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

  async update({ id, name, brand, price }: UpdateRequest): Promise<Product> {
    const productsRepository = getRepository(Product);

    const savedProduct = await this.findById(id);

    const product = await productsRepository.save({
      ...savedProduct,
      name,
      brand,
      price,
    });

    return product;
  }

  async delete(id: string): Promise<void> {
    const productsRepository = getRepository(Product);

    await this.findById(id);

    productsRepository.delete(id);
  }
}
