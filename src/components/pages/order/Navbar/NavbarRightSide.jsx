import styled from "styled-components";
import Profile from "./Profile";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { useContext } from "react";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import ToastAdmin from "./ToastAdmin";
import OrderContext from "../../../../context/OrderContext";


export default function NavbarRightSide({ username }) {

  const {isAdminMode, setIsAdminMode} = useContext(OrderContext);


  const handleToggle = () => {
    const newState = !isAdminMode;
    setIsAdminMode(newState);

    if (newState) {
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <NavbarRightSideStyled>
      <ToggleButton 
       isChecked={isAdminMode}
       onToggle={handleToggle}
       labelIfChecked="Désactiver le mode admin"
       labelIfUnchecked="Activer le mode admin" />
      <Profile username={username} />
      <ToastAdmin />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;
`;
