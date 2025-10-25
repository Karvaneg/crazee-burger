import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import Card from "../../../../reusable-ui/Card";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

export default function Menu() {
  const {
    menu,
    isAdminMode,
    handleDeleteProduct,
    resetMenu,
    // handleSelectProduct,
    setProductSelected,
  } = useContext(OrderContext);

  // state

  // comportements
  const handleClick = (idProductSelected) => {
    const productSelected = menu.find(
      (product) => product.id === idProductSelected
    );

    setProductSelected(productSelected);
  };

  // affichage (render)

  if (menu.length === 0)
    return (
      <div>
        {isAdminMode ? (
          <EmptyMenuAdmin onReset={resetMenu} />
        ) : (
          <EmptyMenuClient />
        )}
      </div>
    );

  return (
    <MenuStyled>
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            id={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isAdminMode}
            onDelete={() => handleDeleteProduct(id)}
            onClick={() => handleClick(id)}
            hasSelectCard={isAdminMode}
            // handleSelectProduct={handleSelectProduct}
            // currentProductSelected={currentProductSelected}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: grid;
  // @COMMENT : the auto-fit keyword tells the grid to automatically adjust the number of columns based on the available space. The minmax(300px, 1fr) function sets a minimum width of 300px for each column and allows it to grow to fill the available space (1fr).
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  overflow-y: scroll;
`;
