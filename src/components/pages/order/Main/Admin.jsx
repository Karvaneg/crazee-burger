import styled from "styled-components";

export default function Admin() {
  return (
    <AdminStyled>
        <div className="admin-tabs">AdminTabs</div>
        <div className="admin-panel">AdminPanel</div>
    </AdminStyled>
  )
}

const AdminStyled = styled.div`
    border: 2px solid blue;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 250px;
    
    .admin-tabs {
        border: 2px solid red;
        
    }

    .admin-panel {
        border: 2px solid orange;
        
    }
`;
