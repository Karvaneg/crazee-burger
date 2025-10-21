import styled from "styled-components";

export default function EmptyMenuAdmin({ resetMenu }) {
  return (
    <EmptyMenuAdminStyled>
      <span>Le menu est vide ?</span>
      <span>Cliquez ci-dessous pour le réinitialiser</span>
      <button onClick={resetMenu}>Générer de nouveaux produits</button>
    </EmptyMenuAdminStyled>
  );
}

const EmptyMenuAdminStyled = styled.div`
  font-family: Amatic SC;
  font-weight: 700;
  font-style: Bold;
  font-size: 36px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  display: flex;

  button {
    width: 224.046875;
    height: 50;
    angle: 0 deg;
    opacity: 1;
    top: 462.91px;
    left: 587.97px;
    border-radius: 5px;
    border-width: 1px;
    padding-top: 19px;
    padding-right: 24.05px;
    padding-bottom: 19px;
    padding-left: 25px;
    border: 1px solid #ff9f1b;
    background: #ff9f1b;
    color: white;
    cursor: pointer;
  }
`;
