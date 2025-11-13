import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";

export default function BasketProducts({ basket }) {
  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => (
        <div>
          <span>{basketProduct.title}</span>
          <span>{basketProduct.imageSource}</span>
          <span>{formatPrice(basketProduct.price)}</span>
        </div>
      ))}
    </BasketProductsStyled>
  );
}

const BasketProductsStyled = styled.div`
  overflow-y: scroll;
  height: 100%;
`;
