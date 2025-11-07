import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function TextInput({
  value,
  ariaLabel,
  onChange,
  Icon,
  className,
  version = "normal",
  ...extraProps
}) {
  return (
    <TextInputStyled className={className} version={version}>
      <div className="icon">{Icon && Icon}</div>
      <input
        value={value}
        onChange={onChange}
        aria-label={ariaLabel}
        {...extraProps}
      />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;

  .icon {
    display: flex;
    font-size: ${theme.fonts.size.P1};
    margin: 0 13px 0 8px;
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    width: 100%;
    //font-family: "Open Sans", sans-serif;

    &::placeholder {
      font-size: ${theme.fonts.size.SM};
      color: ${theme.colors.greyMedium};
    }
  }

  /* ${(props) => {
    if (props.version === "normal") return extraStyleNormal;
    if (props.version === "minimallist") return extraStyleMinimalist;
  }}
  on passe d'une version "junior" à une version "senior" dite du dictionnaire
  ${(props) =>
    EXTRA_STYLE[
      props.version
    ]} enfin, ci-dessous, on déstructure pour s'affranchir du props et simplifier le code */

  ${({ version }) => EXTRA_STYLE[version]}
`;

const extraStyleNormal = css`
  background-color: ${theme.colors.white};
  padding: 18px 24px;
  color: ${theme.colors.greySemiDark};

  input {
    color: ${theme.colors.dark};

    &::placeholder {
      background-color: ${theme.colors.white};
    }
  }
`;

const extraStyleMinimalist = css`
  background-color: ${theme.colors.background_white};
  padding: 8px 16px 8px 8px;
  color: ${theme.colors.greyBlue};

  input {
    background: ${theme.colors.background_white};
    color: ${theme.colors.dark};

    &:focus {
      outline: 0;
    }
  }
`;

const EXTRA_STYLE = {
  normal: extraStyleNormal,
  minimalist: extraStyleMinimalist,
};
