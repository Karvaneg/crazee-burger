import styled from "styled-components";
import BasketCard from "./BasketCard";
import { IMAGE_COMING_SOON } from "../../../../../enums/product";
import OrderContext from "../../../../../context/OrderContext";
import { useContext } from "react";
import { findInArray } from "../../../../../utils/array";

export default function BasketProducts() {
  const {
    basket,
    menu,
    isAdminMode,
    handleDeleteBasketProduct,
    productSelected,
    setProductSelected,
    titleEditRef,
    setIsCollapsed,
    setCurrentTabSelected,
  } = useContext(OrderContext);

  const handleOnClick = async (idBasketProduct) => {
    if (!isAdminMode) return;

    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    const productClickedOn = findInArray(idBasketProduct, menu);
    await setProductSelected(productClickedOn);
    titleEditRef.current.focus();
  };

  const handleOnDelete = (e, id) => {
    e.stopPropagation();
    handleDeleteBasketProduct(id);
  };

  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => {
        const menuProduct = menu.find((p) => p.id === basketProduct.id);

        return (
          <div className="basket-card" key={basketProduct.id}>
            <BasketCard
              {...menuProduct}
              quantity={basketProduct.quantity}
              imageSource={
                menuProduct.imageSource
                  ? menuProduct.imageSource
                  : IMAGE_COMING_SOON
              }
              onDelete={(e) => handleOnDelete(e, basketProduct.id)}
              onClick={() => handleOnClick(basketProduct.id)}
              isClickable={isAdminMode}
              isSelected={productSelected?.id === basketProduct.id}
            />
          </div>
        );
      })}
    </BasketProductsStyled>
  );
}

const BasketProductsStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
  &:hover {
    scrollbar-color: initial;
  }

  .basket-card {
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    &:first-child {
      margin-top: 20px;
    }
    &:last-child {
      margin-bottom: 20px;
    }
  }
`;
