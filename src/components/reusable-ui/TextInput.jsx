import styled from "styled-components"
import { theme } from "../../theme"

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <InputStyled>
        {Icon && Icon}
        <input 
            value={value} 
            onChange={onChange} 
            type="text"
            {...extraProps}
        />
    </InputStyled>
  )
}

const InputStyled = styled.div`
    background-color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon{
        font-size: ${theme.fonts.P0};
        color: ${theme.colors.greyDark};
        margin-right: 8px;
    }

    input{
        border: none;
        font-size: ${theme.fonts.P0};
        color: ${theme.colors.dark};
        width: 100%;

        &::placeholder {
            background-color: white;
            color: ${theme.colors.greyMedium};
        }
    }
`