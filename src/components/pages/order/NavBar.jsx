import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";

export default function NavBar({ username }) {
  return (
    <NavbarStyled>
      <div className="left-side">Left</div>
      <NavbarRightSide username={username} />
      
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
    background: yellow;
    height: 10vh;
    display: flex;
    justify-content: space-between;

    .left-side {
        background: pink;
    }

`;