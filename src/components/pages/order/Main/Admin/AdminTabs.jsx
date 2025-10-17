import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig } from "./getTabsConfig";

export default function AdminTabs() {

  const {
    isCollapsed, 
    setIsCollapsed, 
    currentTabSelected,
    setcurrentTabSelected
  } = useContext(OrderContext)

  const handleClick = () => { 
    setIsCollapsed(!isCollapsed);
  }

  const selectTab = (tabSelected) => {
    setIsCollapsed(false) // Ouvre moi le panel dans tous les cas
    setcurrentTabSelected(tabSelected) // Réactualise l'onglet sélectionné
  }

  const tabs = getTabsConfig(currentTabSelected)

  return (
    <AdminTabsStyled>
      <Tab
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={handleClick}
        className={isCollapsed ? "is-active" : ""}
      />
      {tabs.map((tab) => {
        return (
          <Tab
            key={tab.index}
            label={tab.label}
            Icon={tab.Icon}
            onClick={() => selectTab(tab.index)}
            className={currentTabSelected === tab.index ? "is-active" : ""}
          />
        )
      })}
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
    display: flex;
    padding: 0 20px;
       
    
    .is-active{
      background: ${theme.colors.background_dark};
      color: ${theme.colors.white};
      border-color: ${theme.colors.background_dark};
    }

    button{
      margin-left: 1px;
    }
`;
