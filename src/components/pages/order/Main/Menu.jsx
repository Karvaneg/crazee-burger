import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import Card from "./Card";
import { useState } from "react";

export default function Menu() {

    // state
    const [menu, setMenu] = useState(fakeMenu2);

    // comportements

  // affichage (render)

  return (
    <MenuStyled >
        {menu.map((product) => {
            return <Card 
                      key={product.id} 
                      title={product.title}
                      imageSource={product.imageSource}
                      price={product.price}
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