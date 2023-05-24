const ProductService = require('../product_service.js');
const StubPRoductClient = require('./stub_product_client.js');

describe('ProductService - Stub', () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubPRoductClient());
  });

  it('should filter out only awailable items', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: '🥛', available: true }]);
  });
});
