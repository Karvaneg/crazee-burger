import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function EmptyBasket() {
  return <EmptyBasketStyled>Votre commande est vide.</EmptyBasketStyled>;
}

const EmptyBasketStyled = styled.div`
  // overflow-y: scroll;
  color: ${theme.colors.greyBlue};
  font-weight: ${theme.fonts.weights.regular};
  font-size: ${theme.fonts.size.P4};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
