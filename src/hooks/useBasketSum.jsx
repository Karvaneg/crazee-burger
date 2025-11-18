import { useMemo } from "react";

/**
 * Petit utilitaire générique inspiré de useArray.findById
 */
const findById = (arr, id) => arr.find((item) => item.id === id);

/**
 * Hook calculant le total d'un panier basé sur les infos du menu
 */
export const useBasketSum = (basket, menu) => {
  return useMemo(() => {
    return basket.reduce((total, { id, quantity }) => {
      const menuProduct = findById(menu, id);
      const safePrice = Number(menuProduct?.price) || 0;
      const safeQuantity = Number(quantity) || 0;
      return total + safePrice * safeQuantity;
    }, 0);
  }, [basket, menu]);
};
