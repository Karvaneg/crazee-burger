import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useBasketSum } from "../../../../../hooks/useBasketSum";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { formatPrice } from "../../../../../utils/maths";

export default function Total() {
  const { basket, getTotalItemsInBasket, menu } = useContext(OrderContext);

  const sumToPay = useBasketSum(basket, menu);
  return (
    <TotalStyled>
      <div>
        <span className="total">TOTAL </span>
        <span className="quantity">
          ({getTotalItemsInBasket()}{" "}
          {getTotalItemsInBasket() > 1 ? "articles" : "article"})
        </span>
      </div>
      <div>
        <span className="amount">{formatPrice(sumToPay)}</span>
      </div>
    </TotalStyled>
  );
}
const TotalStyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  color: ${theme.colors.primary};
  font-weight: ${theme.fonts.weights.bold};
  font-size: ${theme.fonts.size.P4};
  font-family: ${theme.fonts.families.stylish};
  letter-spacing: 2px;
  .quantity {
    font-size: ${theme.fonts.size.P3};
  }
`;
