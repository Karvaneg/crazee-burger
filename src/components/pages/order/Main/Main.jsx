import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled>
      <div className="basket">Basket</div>
      <Menu />
    </MainStyled>
  )
}

const MainStyled = styled.main`
  background: ${theme.colors.background_white};  
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ; 
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  flex: 1; // or you can also use this : height: calc(95vh - 10vh);
  display: grid;
  grid-template-columns: 25% 1fr;

  .basket {
    border: 2px solid green;
  }
`;