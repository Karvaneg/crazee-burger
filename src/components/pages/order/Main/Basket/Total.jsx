import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Total({ amountToPay }) {
  return (
    <TotalStyled>
      <span className="total">Total</span>
      <span className="amount">{amountToPay}</span>
    </TotalStyled>
  );
}
const TotalStyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${theme.colors.primary};
  font-weight: ${theme.fonts.weights.bold};
  font-size: ${theme.fonts.size.P4};
  font-family: ${theme.fonts.families.stylish};
  letter-spacing: 2px;
`;
