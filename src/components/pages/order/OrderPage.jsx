import { useParams } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import NavBar from "./Navbar/NavBar";
import { useRef, useState } from "react";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { deepClone } from "../../../utils/array";

export default function OrderPage() {
  // STATE
  const { username } = useParams();
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.LARGE);

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);

  const titleEditRef = useRef();

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
    setProductSelected(EMPTY_PRODUCT); // vide le panneau d'édition
  };

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
    setProductSelected(updatedProduct); // garde le panel synchronisé
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
    resetMenu,
    newProduct,
    setNewProduct,
    titleEditRef,
  };

  // AFFICHAGE (RENDER)
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
