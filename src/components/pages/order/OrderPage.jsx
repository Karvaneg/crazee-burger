import { useParams } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import NavBar from "./Navbar/NavBar";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";

export default function OrderPage() {

  //state
  const {username} = useParams();
  const [isAdminMode, setIsAdminMode] = useState(false)
  const [isCollapsed, setIsCollapsed ] = useState(false)
  const [currentTabSelected, setcurrentTabSelected] = useState("add")
  
  //comportements

  const OrderContextValue = {
    isAdminMode,
    setIsAdminMode,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setcurrentTabSelected,
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
  )
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
