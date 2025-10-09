import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Admin() {
  return (
    <AdminStyled>
        <div className="admin-tabs">AdminTabs</div>
        <div className="admin-panel">AdminPanel</div>
    </AdminStyled>
  )
}

const AdminStyled = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 250px;
    box-shadow: ${theme.shadows.subtle};
    border: 1px solid ${theme.colors.greyLight};
    background: ${theme.colors.white};


    .admin-tabs {
      //  border: 2px solid red;
        
    }

    .admin-panel {
      //  border: 2px solid orange;
        
    }
`;
