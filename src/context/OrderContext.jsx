import { createContext } from "react";

export default createContext({
  isAdminMode: false,
  setIsAdminMode: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  currentTabSelected: "add",
  setCurrentTabSelected: () => {},

  menu: [],
  handleAddProduct: () => {},
  handleUpdateProduct: () => {},
  handleDeleteProduct: () => {},
  resetMenu: () => {},

  newProduct: [],
  setNewProduct: () => {},

  productSelected: {},
  setProductSelected: () => {},

  titleEditRef: {},

  basket: [],
  handleAddToBasket: () => {},
  handleUpdateBasketProduct: () => {},
  handleDeleteBasketProduct: () => {},
  getTotalItemsInBasket: () => {},
  isEmpty: () => {},
});
