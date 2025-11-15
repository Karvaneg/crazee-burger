import { useMemo } from "react";

export const useBasketSum = (basket) => {
  return useMemo(() => {
    return basket.reduce((total, { price, quantity }) => {
      const safePrice = Number(price) || 0;
      const safeQuantity = Number(quantity) || 0;
      return total + safePrice * safeQuantity;
    }, 0);
  }, [basket]);
};
