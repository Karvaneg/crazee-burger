import { useArray } from "./useArray";
import { fakeBasket } from "../fakeData/fakeBasket";
import { useMemo } from "react";

/**
 * Hook métier gérant l'état du panier.
 * Basé sur useArray pour la gestion immuable et déclarative.
 */
export const useBasket = () => {
  // initialisation avec ton fakeBasket
  const {
    array: basket,
    unshift,
    updateById,
    removeById,
    isEmpty,
    findById,
  } = useArray(fakeBasket.EMPTY);

  /**
   * Ajoute un produit au panier.
   * Si le produit existe déjà, incrémente sa quantité.
   */
  const handleAddToBasket = (productToAdd) => {
    const existing = findById(productToAdd.id);

    if (existing) {
      // on recrée uniquement le produit modifié
      updateById(existing.id, { quantity: existing.quantity + 1 });
    } else {
      // on ajoute un nouveau produit avec quantity = 1, au début du panier
      unshift({ ...productToAdd, quantity: 1 });
    }
  };
  //   // Fusion : on garde la quantité actuelle
  //   updateById(updatedProduct.id, {
  //     ...updatedProduct,
  //     quantity: existing.quantity,
  //   });
  // };

  /**
   * Supprime un produit du panier par son id.
   */
  const handleDeleteBasketProduct = (idBasketProduct) => {
    removeById(idBasketProduct);
  };

  /**
   * Nombre total d'articles dans le panier
   */
  const getTotalItemsInBasket = () =>
    basket.reduce((sum, p) => sum + p.quantity, 0);

  return useMemo(
    () => ({
      basket,
      handleAddToBasket,
      handleDeleteBasketProduct,
      getTotalItemsInBasket,
      isEmpty,
    }),
    [basket]
  );
};
