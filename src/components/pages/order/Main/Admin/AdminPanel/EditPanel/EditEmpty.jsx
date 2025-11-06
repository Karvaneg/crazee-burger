import { HiCursorClick } from "react-icons/hi";
import styled, { keyframes } from "styled-components";
import { theme } from "../../../../../../../theme";

export default function EditEmpty() {
  return (
    <EditEmptyStyled>
      <span>Cliquer sur un produit du menu pour le modifier</span>
      <HiCursorClick />
    </EditEmptyStyled>
  );
}

const lFfr = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const EditEmptyStyled = styled.div`
  width: 50%;
  height: 100%;
  animation: ${lFfr} 1000ms ease 0s 1 normal none running;
  font-family: ${theme.fonts.families.stylish};
  font-size: ${theme.fonts.size.P3};
  display: flex;
  position: relative;
  top: 50px;
  color: ${theme.colors.greyBlue};

  span {
    margin-right: 10px;
  }
`;
