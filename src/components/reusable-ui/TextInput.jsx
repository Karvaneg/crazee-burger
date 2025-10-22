import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <InputStyled>
      <div className="icon">{Icon && Icon}</div>
      <input type="text" value={value} onChange={onChange} {...extraProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  background-color: white;
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.SM};
    color: ${theme.colors.greyDark};
    margin-right: 13px;
  }

  input {
    border: none;
    font-size: ${theme.fonts.SM};
    color: ${theme.colors.dark};
    width: 100%;

    &::placeholder {
      background-color: white;
      color: ${theme.colors.greyMedium};
    }
  }
`;
