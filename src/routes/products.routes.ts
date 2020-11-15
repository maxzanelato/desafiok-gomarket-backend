import { Router } from 'express';

import ProductService from '../services/ProductService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const productsRouter = Router();

productsRouter.use(ensureAuthenticated);

productsRouter.get('/', async (request, response) => {
  const productService = new ProductService();

  const { take, skip, keyword, providerId } = request.query as any;

  const products = await productService.find(
    { take, skip, keyword },
    providerId,
  );

  return response.json(products);
});

productsRouter.get('/:id', async (request, response) => {
  const productService = new ProductService();

  const { take, skip, keyword } = request.query as any;

  const products = await productService.findById(request.params.id, {
    take,
    skip,
    keyword,
  });

  return response.json(products);
});

productsRouter.post('/', async (request, response) => {
  const { providerId, name, brand, price } = request.body;

  const createProduct = new ProductService();

  const product = await createProduct.execute({
    providerId,
    name,
    brand,
    price,
  });

  return response.json(product);
});

export default productsRouter;
