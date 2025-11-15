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

  const handleClick = async (idBasketProduct) => {
    if (!isAdminMode) return;
    console.log("Click on basket product with id :", idBasketProduct);
    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    const productClickedOn = findInArray(idBasketProduct, menu);
    await setProductSelected(productClickedOn);
    titleEditRef.current.focus();
  };

  const handleOnDelete = (e, id) => {
    e.stopPropagation();
    console.log("Delete product with id :", id);
    handleDeleteBasketProduct(id);
  };

  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => (
        <div className="basket-card" key={basketProduct.id}>
          <BasketCard
            {...basketProduct}
            imageSource={
              basketProduct.imageSource
                ? basketProduct.imageSource
                : IMAGE_COMING_SOON
            }
            onDelete={(e) => handleOnDelete(e, basketProduct.id)}
            onClick={() => handleClick(basketProduct.id)}
            isAdminMode={isAdminMode}
            isSelected={productSelected?.id === basketProduct.id}
          />
        </div>
      ))}
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
