import { useArray } from "./useArray";
import { fakeBasket } from "../fakeData/fakeBasket";

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
  } = useArray(fakeBasket.EMPTY);

  /**
   * Ajoute un produit au panier.
   * Si le produit existe déjà, incrémente sa quantité.
   */
  const handleAddToBasket = (productToAdd) => {
    const existing = basket.find((p) => p.id === productToAdd.id);

    if (existing) {
      // on recrée uniquement le produit modifié
      updateById(existing.id, { quantity: existing.quantity + 1 });
    } else {
      // on ajoute un nouveau produit avec quantity = 1, au début du panier
      unshift({ ...productToAdd, quantity: 1 });
    }
  };

  const handleUpdateBasketProduct = (updatedProduct) => {
    const existing = basket.find((p) => p.id === updatedProduct.id);
    if (!existing) return;

    // Fusion : on garde la quantité actuelle
    updateById(updatedProduct.id, {
      ...updatedProduct,
      quantity: existing.quantity,
    });
  };

  /**
   * Supprime un produit du panier par son id.
   */
  const handleDeleteBasketProduct = (idBasketProduct) => {
    removeById(idBasketProduct);
  };

  /**
   * Calcul du total du panier
   */
  const getTotal = () =>
    basket.reduce((total, p) => total + p.price * p.quantity, 0);

  /**
   * Nombre total d'articles dans le panier
   */
  const getTotalItemsInBasket = () =>
    basket.reduce((sum, p) => sum + p.quantity, 0);

  return {
    basket,
    handleAddToBasket,
    handleUpdateBasketProduct,
    handleDeleteBasketProduct,
    getTotal,
    getTotalItemsInBasket,
    isEmpty,
  };
};
