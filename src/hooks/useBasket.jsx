import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";

/**
 * Hook métier gérant l'état du panier.
 * Respecte strictement le principe d'immutabilité :
 * - jamais de mutation directe du state
 * - chaque update crée un nouveau tableau
 * - chaque élément modifié est recréé
 */
export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  /**
   * Ajoute un produit au panier.
   * Si le produit est nouveau : ajout avec quantité = 1
   * S'il existe déjà : incrément de la quantité
   */
  const handleAddToBasket = (productToAdd) => {
    setBasket((prevBasket) => {
      // Recherche d'une éventuelle entrée existante
      const existingProduct = prevBasket.find((p) => p.id === productToAdd.id);

      // 🔹 Cas 1 — Produit absent : on crée un nouvel objet + un nouveau tableau
      if (!existingProduct) {
        return [
          { ...productToAdd, quantity: 1 }, // nouvel objet
          ...prevBasket, // nouvelle copie de tableau
        ];
      }

      // 🔹 Cas 2 — Produit déjà présent : on retourne un NOUVEAU tableau,
      //            en recréant uniquement l'objet modifié.
      return prevBasket.map(
        (p) =>
          p.id === productToAdd.id
            ? { ...p, quantity: p.quantity + 1 } // nouvel objet modifié
            : p // objet inchangé (référence conservée)
      );
    });
  };

  return { basket, handleAddToBasket };
};
