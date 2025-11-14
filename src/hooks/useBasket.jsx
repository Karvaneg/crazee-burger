import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, findInArray } from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddToBasket = (productToAdd) => {
    //1. Copie du state
    const basketCopy = deepClone(basket);

    const isProductAlreadyInBasket =
      findInArray(productToAdd.id, basketCopy) !== undefined;

    //2. manip de la copie du state
    // 1er cas : le produit n'est pas dans le panier, on l'ajoute avec une quantité de 1
    if (!isProductAlreadyInBasket) {
      const newBasketProduct = {
        ...productToAdd,
        quantity: 1,
      };

      const basketUpdated = [newBasketProduct, ...basketCopy];

      //3. Mise à jour du state
      setBasket(basketUpdated);
    }

    // 2ème cas : le produit est déjà dans le panier, on incrémente la quantité
    else {
      const basketUpdated = basketCopy.map((basketProduct) => {
        if (basketProduct.id === productToAdd.id) {
          return {
            ...basketProduct,
            quantity: basketProduct.quantity + 1,
          };
        }
        return basketProduct;
      });

      //3. Mise à jour du state
      setBasket(basketUpdated);
    }
  };
  return { basket, handleAddToBasket };
};
