export const useBasketSum = (basket) => {
  return basket.reduce((total, basketProduct) => {
    return total + basketProduct.price * basketProduct.quantity;
  }, 0);
};
