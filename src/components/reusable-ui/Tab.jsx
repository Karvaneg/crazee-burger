import styled from "styled-components";
import { theme } from "../../theme";

export default function Tab({ Icon }) {
  return (
    <TabStyled>
        <div className="icon">
            {Icon}
        </div>
    </TabStyled>
  )
}

const TabStyled = styled.button`
    height: 43px;
    padding: 0 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    left: 5%;
    top: 1px;
    cursor: pointer;

    // fonts
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.greySemiDark};

    // background and shadow
    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.subtle};

    // borders
    border-width: 1px 1px 1px 1px;
    border-style: solid;
    border-color: ${theme.colors.greyLight};

    // border-radius
    border-radius: ${theme.borderRadius.round};
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;

    &:hover {
        border-bottom: 1px solid ${theme.colors.white};
    }
    .icon {
        display: flex;
    }
`;