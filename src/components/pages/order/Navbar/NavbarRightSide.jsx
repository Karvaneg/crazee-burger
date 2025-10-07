import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "./ToggleButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { theme } from "../../../../theme";
import { useState } from "react";


export default function NavbarRightSide({ username, isChecked, onToggle }) {

  const [isAdminMode, setIsAdminMode] = useState(false);

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
       onToggle={handleToggle} />
      <Profile username={username} />
      <ToastContainer className="toaster" bodyClassName="body-toast" role="info" />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;
    
    .toaster {
      max-width: 300px;
    }

    .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
      background: ${theme.colors.background_dark};
    }

    .body-toast {
      .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
        margin-right: 20px;
        margin-left: 5px;
      }
      div {
        line-height: 1.3em;
      }
    }
`;
