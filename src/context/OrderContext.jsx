import { createContext } from "react";

export default createContext({
    isAdminMode: false,
    setIsAdminMode: () => {},
    isCollapsed: false,
    setIsCollapsed: () => {},
    isEditSelected: false,
    setIsEditSelected: () => {},
    isAddSelected: false,
    setIsAddSelected: () => {},
    currentTabSelected: "add",
    setcurrentTabSelected: () => {}
})