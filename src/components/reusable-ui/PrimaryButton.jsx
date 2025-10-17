import styled from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ label, Icon, className }) {
  return (
    <PrimaryButtonStyled className={className}>
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
    border: 1px solid ${theme.colors.primary};
    border-radius: ${theme.borderRadius.round};
    background-color: ${theme.colors.primary};
    color: white;
    font-size: ${theme.fonts.size.SM};
    font-weight: ${theme.fonts.weights.heavy};
    text-align: center;
    cursor: pointer;

    &:hover {
        color: ${theme.colors.primary};
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.primary};
        transition: all 200ms ease-out;
    }
        
    &:active {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
    }

    &.is-disabled {
        opacity: 50%;
        cursor: not-allowed;
        z-index: 2;
    }

    &.with-focus {
        border: 1px solid white;
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
        :hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.white};
        }
        :active {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
        }
    }
`
