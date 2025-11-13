import styled from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import EmptyBasket from "./EmptyBasket";
import BasketProducts from "./BasketProducts";

export default function Basket() {
  const { basket } = useContext(OrderContext);

  const isBasketEmpty = basket.length === 0;

  return (
    <BasketStyled>
      <header>
        <Total amountToPay={formatPrice(0)} />
      </header>

      {isBasketEmpty ? <EmptyBasket /> : <BasketProducts />}

      <Footer />
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
`;
