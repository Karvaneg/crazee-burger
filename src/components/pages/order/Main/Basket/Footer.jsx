import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Footer() {
  return <FooterStyled>Codé avec ❤️ et React.JS</FooterStyled>;
}

const FooterStyled = styled.div`
  background: ${theme.colors.background_dark};
  color: ${theme.colors.text_white};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  padding-top: 22.5px;
  padding-bottom: 22.5px;
  text-align: center;
  vertical-align: middle;
  font-weight: ${theme.fonts.weights.bold};
  font-size: ${theme.fonts.size.P2};
`;
