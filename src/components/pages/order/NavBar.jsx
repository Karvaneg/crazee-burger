import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import NavbarLeftSide from "./NavbarLeftSide";

export default function NavBar({ username }) {
  return (
    <NavbarStyled>
      <NavbarLeftSide />
      <NavbarRightSide username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
    background: yellow;
    height: 10vh;
    display: flex;
    justify-content: space-between;
`;