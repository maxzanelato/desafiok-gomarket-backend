import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import uploadConfig from '../config/upload';

import AppError from '../errors/AppError';
import Product from '../models/Product';

interface Request {
  productId: string;
  imageFilename: string;
}

export default class ProductImageUpdateService {
  public async execute({
    productId,
    imageFilename,
  }: Request): Promise<Product> {
    const productRepository = getRepository(Product);

    const product = await productRepository.findOne(productId);

    if (!product) {
      throw new AppError('Product not found!', 400);
    }

    if (product.image) {
      const productImageFilePath = path.join(
        uploadConfig.directory,
        product.image,
      );
      const productImageFileExists = await fs.promises.stat(
        productImageFilePath,
      );

      if (productImageFileExists) {
        await fs.promises.unlink(productImageFilePath);
      }
    }

    product.image = imageFilename;

    await productRepository.save(product);

    return product;
  }
}
