import styled, { css } from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import Card from "../../../../reusable-ui/Card";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductIsClicked } from "./helpers";
import { EMPTY_PRODUCT, IMAGE_COMING_SOON } from "../../../../../enums/product";
import { findInArray } from "../../../../../utils/array";

export default function Menu() {
  const {
    menu,
    isAdminMode,
    handleDeleteProduct,
    resetMenu,
    productSelected,
    setProductSelected,
    setIsCollapsed,
    setCurrentTabSelected,
    titleEditRef,
    handleAddToBasket,
  } = useContext(OrderContext);

  // STATE

  // COMPORTEMENTS (ou FUNCTIONS ou Gestionnaires d'évènement ou "event handlers")
  // Une fonction est par définition synchrone / un setter est asynchrone càd que l'update du state ne se fait pas immédiatement
  // pour que le focus soit bien mis sur le bon élément après le setState, il faut donc s'assurer que le setState est bien terminé avant d'exécuter le focus() donc on rend la fonction handleClick asynchrone et on utilise await pour attendre la fin du setState avant d'exécuter le focus()
  const handleClick = async (idProductSelected) => {
    if (!isAdminMode) return;
    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    // const productClickedOn = menu.find(
    //   (product) => product.id === idProductSelected
    // );
    const productClickedOn = findInArray(idProductSelected, menu);
    await setProductSelected(productClickedOn);
    titleEditRef.current.focus();
  };

  const handleCardDelete = (e, idProductToDelete) => {
    e.stopPropagation();
    handleDeleteProduct(idProductToDelete);
    idProductToDelete === productSelected.id &&
      setProductSelected(EMPTY_PRODUCT); // vide le panneau d'édition
  };

  const handleAddButton = (e, idProductToAdd) => {
    e.stopPropagation();
    const productToAdd = findInArray(idProductToAdd, menu);
    handleAddToBasket(productToAdd);
  };

  // AFFICHAGE (RENDER)

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
            imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isAdminMode}
            onDelete={(e) => handleCardDelete(e, id)}
            onClick={() => handleClick(id)}
            onAdd={(e) => handleAddButton(e, id)}
            isHoverable={isAdminMode}
            isSelected={checkIfProductIsClicked(id, productSelected.id)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: grid;
  /* @COMMENT : the auto-fit keyword tells the grid to automatically adjust the number of columns based on the available space. The minmax(300px, 1fr) function sets a minimum width of 300px for each column and allows it to grow to fill the available space (1fr).
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  overflow-y: scroll;
`;
