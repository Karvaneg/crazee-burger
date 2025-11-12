import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array";

export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu.LARGE);

  // COMPORTEMENTS (ou Gestionnaire de state ou "state handlers")
  //Add Product
  const handleAddProduct = (newProduct) => {
    // A éviter : Copy du state en mode shallow copy/clone, avec le spread operator (menu est en fait modifié) : const menuCopy = [...menu];
    // 1. Copy du state (en mode deep clone)
    const menuCopy = deepClone(menu);

    // 2. Manip du state
    const menuUpdated = [newProduct, ...menuCopy];

    // 3. Update du state
    setMenu(menuUpdated);
  };

  //Delete Product
  const handleDeleteProduct = (idOfProductToDelete) => {
    // 1. Copy du state (en mode deep clone)
    const menuCopy = deepClone(menu);

    // 2. Manip du state
    const menuUpdated = menuCopy.filter(
      (product) => product.id !== idOfProductToDelete
    );

    // 3. Update du state
    setMenu(menuUpdated);
  };

  //Update Product
  const handleUpdateProduct = (updatedProduct) => {
    // 1. Copy du state (en mode deep clone)
    const menuCopy = deepClone(menu);

    // 2. Manip du state
    const indexOfProductToUpdate = menu.findIndex(
      (product) => product.id === updatedProduct.id
    );

    menuCopy[indexOfProductToUpdate] = updatedProduct;

    // 3. Update du state
    setMenu(menuCopy);
    //   setProductSelected(updatedProduct); // garde le panel synchronisé
  };

  //Reset Menu
  const resetMenu = () => {
    setMenu(fakeMenu.SMALL);
  };

  return {
    menu,
    setMenu,
    handleAddProduct,
    handleUpdateProduct,
    handleDeleteProduct,
    resetMenu,
  };
};
