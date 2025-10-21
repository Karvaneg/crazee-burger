import styled from "styled-components";

export default function EmptyMenuClient() {
  return (
    <EmptyMenuClienStyled>
      <span>Victime de notre succès ! :D</span>
      <span>De nouvelles recettes sont en cours de préparation.</span>
      <span>A très vite !</span>
    </EmptyMenuClienStyled>
  );
}

const EmptyMenuClienStyled = styled.div``;
