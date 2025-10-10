import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function AdminPanel() {
  return (
    <AdminPanelStyled>
        AdminPanel
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
    height: 250px;
    box-shadow: ${theme.shadows.subtle};
    border: 1px solid ${theme.colors.greyLight};
    background: ${theme.colors.white};
        
`;