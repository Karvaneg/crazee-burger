import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function Button({
  label,
  Icon,
  className,
  version = "normal",
  onClick,
}) {
  return (
    <ButtonStyled className={className} version={version} onClick={onClick}>
      <span>{label}</span>
      <div className="icon">{Icon && Icon}</div>
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  ${({ version }) => EXTRA_STYLE[version]}
`;

const extraStylePrimary = css`
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

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.SM};
    margin-left: 10px;
  }
`;

const extraStyleSuccess = css`
  cursor: pointer;
  color: ${theme.colors.white};
  background: ${theme.colors.success};
  border: 1px solid ${theme.colors.success};
  border-radius: ${theme.borderRadius.round};
  height: 100%;
  padding: 0 1.5em;
  font-weight: ${theme.fonts.weights.semiBold};

  &:hover {
    color: ${theme.colors.success};
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.success};
  }

  &:active {
    color: ${theme.colors.white};
    background: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
`;

const EXTRA_STYLE = {
  primary: extraStylePrimary,
  success: extraStyleSuccess,
};
