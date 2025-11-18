import { useParams } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import NavBar from "./Navbar/NavBar";
import { useRef, useState } from "react";
import OrderContext from "../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { useMenu } from "../../../hooks/useMenu";
import { useBasket } from "../../../hooks/useBasket";

export default function OrderPage() {
  // STATE
  const { username } = useParams();
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);

  const titleEditRef = useRef();

  const {
    menu,
    handleAddProduct,
    handleUpdateProduct,
    handleDeleteProduct,
    resetMenu,
  } = useMenu();

  const {
    basket,
    handleAddToBasket,
    handleDeleteBasketProduct,
    getTotalItemsInBasket,
    isEmpty,
  } = useBasket();

  // CONTEXT VALUE
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
    basket,
    handleAddToBasket,
    handleDeleteBasketProduct,
    getTotalItemsInBasket,
    isEmpty,
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
