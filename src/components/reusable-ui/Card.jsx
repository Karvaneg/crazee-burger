import styled, { css } from "styled-components";
import Button from "./Button";
import { theme } from "../../theme";
import { TiDelete } from "react-icons/ti";
import clsx from "clsx";

export default function Card({
  id,
  title,
  imageSource,
  leftDescription,
  hasDeleteButton,
  onDelete,
  onClick,
  onAdd,
  isHoverable,
  isSelected,
}) {
  return (
    <CardStyled
      className={clsx({
        "is-hoverable": isHoverable,
        "is-selected": isSelected,
      })}
      $isHoverable={isHoverable}
      $isSelected={isSelected}
      onClick={onClick}
      aria-label={`card-${id}`}
    >
      <div className="card">
        <div className="image">
          <img src={imageSource} alt={title} />
        </div>
        <div className="info-text">
          <div className="title">{title}</div>
          <div className="description">
            <div className="left-description">{leftDescription}</div>
            <div className="right-description">
              <Button
                className={"primary-button"}
                aria-label="add-button"
                label={"Ajouter"}
                version="primary"
                onClick={onAdd}
              />
            </div>
          </div>
        </div>

        {hasDeleteButton && (
          <button
            className="delete-button"
            aria-label="delete-button"
            onClick={onDelete}
          >
            <TiDelete className="icon" />
          </button>
        )}
      </div>
    </CardStyled>
  );
}

// -------------------------
// Styled-component pro
// -------------------------

const CardStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => !["$isHoverable", "$isSelected"].includes(prop),
})`
  border-radius: ${theme.borderRadius.extraRound};
  height: 330px;

  .card {
    background: ${theme.colors.white};
    box-sizing: border-box;
    width: 240px;
    height: 330px;
    display: grid;
    grid-template-rows: 65% 1fr;
    padding: 20px;
    padding-bottom: 10px;
    box-shadow: ${theme.shadows.medium};
    border-radius: ${theme.borderRadius.extraRound};
    position: relative;

    .image {
      width: 100%;
      height: auto;
      margin-top: 30px;
      margin-bottom: 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .info-text {
      display: grid;
      grid-template-rows: 30% 70%;
      padding: 5px;

      .title {
        margin: auto 0;
        font-size: ${theme.fonts.size.P4};
        position: relative;
        bottom: 10px;
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.dark};
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
        font-family: "Amatic SC", cursive;
      }

      .description {
        display: grid;
        grid-template-columns: 1fr 1fr;

        .left-description {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-weight: ${theme.fonts.weights.medium};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: ${theme.colors.primary};
        }

        .right-description {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          font-size: ${theme.fonts.size.P1};

          .primary-button {
            font-size: ${theme.fonts.size.XS};
            padding: 12px 0px 12px 12px;
          }
        }
      }
    }

    .delete-button {
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
      width: 30px;
      height: 30px;
      color: ${theme.colors.primary};
      // z-index: 2;
      padding: 0;
      border: none;
      background: none;

      .icon {
        height: 100%;
        width: 100%;
      }

      :hover {
        color: ${theme.colors.red};
      }
      :active {
        color: ${theme.colors.primary};
      }
    }

    /* Hover dynamique si $isHoverable */
    ${({ $isHoverable }) => $isHoverable && hoverableStyle}

    /* Style sélectionné */
    ${({ $isHoverable, $isSelected }) =>
      $isHoverable && $isSelected && selectedStyle}
  }
`;

// -------------------------
// Styles dynamiques
// -------------------------

const hoverableStyle = css`
  &:hover {
    transform: scale(1.05);
    transition: 0.4s ease-out;
    box-shadow: ${theme.shadows.orangeHighLight};
    cursor: pointer;
  }
`;

const selectedStyle = css`
  background: ${theme.colors.primary};

  .primary-button {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
    transition: all 200ms ease-out;

    &:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
    }
    &:active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
  }

  .delete-button {
    color: ${theme.colors.white};

    :active {
      color: ${theme.colors.white};
    }
  }

  .info-text {
    .description {
      .left-description {
        color: ${theme.colors.white};
      }
    }
  }
`;
