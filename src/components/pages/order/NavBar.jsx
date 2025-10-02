import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "../../reusable-ui/Logo";

export default function NavBar({ username }) {
  return (
    <NavbarStyled>
      <Logo />
      <NavbarRightSide username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
    background: white;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    border-radius: 15px 15px 0px 0px;
`;