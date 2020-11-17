import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import ProductService from '../services/ProductService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import ProductImageUpdateService from '../services/ProductImageUpdateService';

const productsRouter = Router();
const upload = multer(uploadConfig);

productsRouter.use(ensureAuthenticated);

productsRouter.get('/', async (request, response) => {
  const productService = new ProductService();

  const { take, skip, keyword } = request.query as any;

  const products = await productService.find({ take, skip, keyword });

  return response.json(products);
});

productsRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const productService = new ProductService();

  const products = await productService.findById(id);

  return response.json(products);
});

productsRouter.get('/own', async (request, response) => {
  const productService = new ProductService();

  const { take, skip, keyword } = request.query as any;

  const products = await productService.findByProviderId(request.user.id, {
    take,
    skip,
    keyword,
  });

  return response.json(products);
});

productsRouter.post('/', async (request, response) => {
  const { name, brand, price } = request.body;

  const createProduct = new ProductService();

  const providerId = request.user.id;

  const product = await createProduct.execute({
    providerId,
    name,
    brand,
    price,
  });

  return response.json(product);
});

productsRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { name, brand, price } = request.body;
  const providerId = request.user.id;

  const productService = new ProductService();

  const product = await productService.update({
    id,
    name,
    brand,
    price,
    providerId,
  });

  return response.json(product);
});

productsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const productService = new ProductService();

  await productService.delete(id);

  return response.status(204).send();
});

productsRouter.patch(
  '/:id/image',
  upload.single('image'),
  async (request, response) => {
    const { id } = request.params;

    const productImage = new ProductImageUpdateService();

    const product = await productImage.execute({
      productId: id,
      imageFilename: request.file.filename,
    });

    return response.json(product);
  },
);

export default productsRouter;
