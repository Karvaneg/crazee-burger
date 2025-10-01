import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavBar({ username }) {
  return (
    <NavbarStyled>
      <div className="left-side">Left</div>

      <div className="right-side">
        Right
        <h1>Bonjour {username}</h1>
        <Link to="/">
        <button>Déconnexion</button>
        </Link>
      </div>
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

    .right-side {
        background: lightblue;
    }
`;