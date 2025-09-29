import styled from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ label, Icon }) {
  return (
    <PrimaryButtonStyled>
        <span>{label}</span>
        {Icon && Icon}
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;
    padding: 18px 24px;
    border: 1px solid ${theme.colors.primary_burger};
    border-radius: ${theme.borderRadius.round};
    background-color: ${theme.colors.primary_burger};
    color: white;
    font-size: ${theme.fonts.size.P0};
    font-weight: ${theme.fonts.weights.heavy};
    text-align: center;
    cursor: pointer;

    &:hover:not(:disabled) {
        background-color: white;
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
        transition: all 200ms ease-out;
    }

    &:active {
        color: white;
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`
