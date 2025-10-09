import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";
import Admin from "./Admin/Admin";

export default function Main() {
  return (
    <MainStyled>
      <div className="basket">Basket</div>
      <div className="menu-and-admin">
        <Menu />
        <Admin />
      </div>
    </MainStyled>
  )
}

const MainStyled = styled.main`
  background: ${theme.colors.background_white};  
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ; 
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  height: calc(95vh - 10vh);
  display: grid;

  // TODO : this code is for basket and menu layout
   grid-template-columns: 25% 1fr;
  // this code is for only menu layout
  // grid-template-columns: 1fr;
  

  .basket {
    border: 2px solid green;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
  }

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
  }
`;