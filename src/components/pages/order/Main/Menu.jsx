import styled from "styled-components";
import { fakeMenu } from "../../../../fakeData/fakeMenu";
import { useState } from "react";
import { formatPrice } from "../../../../utils/maths";
import Card from "../../../reusable-ui/Card";

export default function Menu() {

  // state
  const [menu, setMenu] = useState(fakeMenu.LARGE);

  // comportements

  // affichage (render)

  return (
    <MenuStyled>
        {menu.map(({ id, title, imageSource, price }) => {
            return <Card
                      key={id}
                      title={title}
                      imageSource={imageSource}
                      leftDescription={formatPrice(price)}
                    />
        })}
    </MenuStyled>
  )
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