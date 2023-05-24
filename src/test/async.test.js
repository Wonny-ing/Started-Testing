const fetchProduct = require('../async.js');

describe('Async', () => {
  //ver01
  it('async - done', (done) => {
    //fetchProduct을 호출해서 성공해서 item을 return한다면, 그 item이 object와 동일한지 검사
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200 });
      done();
    });
  });

  //ver02
  it('async - return', () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200 });
    });
  });

  //ver03
  it('async - await', async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: 'Milk', price: 200 });
  });

  //ver04
  it('async - resolves', async () => {
    expect(fetchProduct()).resolves.toEqual({ item: 'Milk', price: 200 });
  });

  it('async - reject', async () => {
    expect(fetchProduct('error')).rejects.toBe('network error');
  });
});

/**
 * 비동기 테스트
 * 1. done을 사용하는 것은 좋지 않다
 * 2. return이나 await를 사용하는 것을 권장
 */
