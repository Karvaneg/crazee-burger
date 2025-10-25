import { useParams } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import NavBar from "./Navbar/NavBar";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../../enums/product";

export default function OrderPage() {
  //state
  const { username } = useParams();
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.LARGE);

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);

  //comportements
  //Add Product
  const handleAddProduct = (newProduct) => {
    // 1. Copy du state
    const menuCopy = [...menu];

    // 2. Manip du state
    const menuUpdated = [newProduct, ...menuCopy];

    // 3. Update du state
    setMenu(menuUpdated);
  };

  //Delete Product
  const handleDeleteProduct = (idOfProductToDelete) => {
    // 1. Copy du state
    const menuCopy = [...menu];

    // 2. Manip du state
    const menuUpdated = menuCopy.filter(
      (product) => product.id !== idOfProductToDelete
    );
    console.log(menuUpdated);

    // 3. Update du state
    setMenu(menuUpdated);
  };

  const handleUpdateProduct = (updatedProduct) => {
    // 1. Copy du state
    const menuCopy = [...menu];

    // 2. Manip du state
    const menuUpdated = menuCopy.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    console.log(menuUpdated);

    // 3. Update du state
    setMenu(menuUpdated);
    setCurrentProductSelected(updatedProduct); // garde le panel synchronisé
  };

  //Select Product
  const handleSelectProduct = (idOfProductToSelect) => {
    // 1. Copy du state
    const currentProductSelectedCopy = currentProductSelected;

    // 2. Manip du state
    const productSelected = (currentProductSelectedCopy) =>
      currentProductSelectedCopy.id === idOfProductToSelect;
    console.log(productSelected);

    // 3. Update du state
    setCurrentProductSelected(productSelected);
  };

  //Reset Menu
  const resetMenu = () => {
    setMenu(fakeMenu.SMALL);
  };

  const OrderContextValue = {
    isAdminMode,
    setIsAdminMode,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    productSelected,
    setProductSelected,
    menu,
    handleAddProduct,
    handleUpdateProduct,
    handleDeleteProduct,
    handleSelectProduct,
    resetMenu,
    newProduct,
    setNewProduct,
  };

  //affichage (render)
  return (
    <OrderContext.Provider value={OrderContextValue}>
      <OrderPageStyled>
        <div className="container">
          {/* on hydrate le composant avec des props (de la data) */}
          <NavBar username={username} />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
