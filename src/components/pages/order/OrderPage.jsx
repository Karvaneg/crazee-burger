import { useParams } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar";

export default function OrderPage() {

  //state
  const {username} = useParams();
  
  //comportements

  //affichage (render)
  return (
    <OrderPageStyled>
      <div className="container">
        {/* on hydrate le composant avec des props (de la data) */}
        <NavBar username={username} />
        
        <div className="main">Main</div>
        
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  background: orange;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;

    .main {
      background: green;
      flex: 1; // or you can also use this : height: calc(95vh - 10vh);

    }
    
  }
`;
