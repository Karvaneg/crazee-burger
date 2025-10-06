import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { useState } from "react";
import { formatPrice } from "../../../../utils/maths";
import Card from "../../../reusable-ui/Card";

export default function Menu() {

  // state
  const [menu, setMenu] = useState(fakeMenu2);

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
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
`;