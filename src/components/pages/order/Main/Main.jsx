import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu/Menu";
import Admin from "./Admin/Admin";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import Basket from "./Basket/Basket";

export default function Main() {
  const { isAdminMode, setIsAdminMode } = useContext(OrderContext);

  return (
    <MainStyled>
      <Basket />
      <div className="menu-and-admin">
        <Menu />
        {/* {isAdminMode ? <Admin /> : null} */}
        {/* @COMMENT : Raccourci logique de la ligne du dessus qd null ou undefined */}
        {isAdminMode && <Admin />}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.main`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  height: calc(95vh - 10vh);
  display: grid;

  // TODO : this code is for basket and menu layout
  grid-template-columns: 25% 1fr;
  // this code is for only menu layout
  // grid-template-columns: 1fr;

  .menu-and-admin {
    box-shadow: ${theme.shadows.strong};
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
  }
`;
