import styled from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";

export default function Basket() {
  return (
    <BasketStyled>
      <header>
        <Total amountToPay={formatPrice(0)} />
      </header>
      <div className="basket-items">
        {/* Basket items will be rendered here */}
        Votre commande est vide.
      </div>
      <footer>Codé avec ❤️ et React.JS</footer>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.basket};
  background: ${theme.colors.background_white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: ${theme.fonts.families.stylish};

  header {
    background: ${theme.colors.background_dark};

    padding-top: 12px;
    padding-right: 16px;
    padding-left: 16px;
    padding-bottom: 13px;
  }
  .basket-items {
    // overflow-y: scroll;
    color: ${theme.colors.greyBlue};
    font-weight: ${theme.fonts.weights.regular};
    font-size: ${theme.fonts.size.P4};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  footer {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.text_white};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    padding-top: 22.5px;
    padding-bottom: 22.5px;
    text-align: center;
    vertical-align: middle;
    font-weight: ${theme.fonts.weights.bold};
    font-size: ${theme.fonts.size.P2};
  }
`;
