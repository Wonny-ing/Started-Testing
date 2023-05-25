const ProductService = require('../product_service.js');
const StubPRoductClient = require('./stub_product_client.js');

describe('ProductService - Stub', () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubPRoductClient());
  });

  it('should filter out only available items', async () => {
    // Arrange, Given - 준비
    // productService = new ProductService(new StubPRoductClient());

    // Act, When - 실헹
    const items = await productService.fetchAvailableItems();

    // Assert, Then - 단언
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: '🥛', available: true }]);
  });
});
