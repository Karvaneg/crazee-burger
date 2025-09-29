import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable-ui/TextInput";


export default function LoginForm() {

    //state
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    //comportements
    const handleSubmit = (e) => {
        e.preventDefault();
        setInputValue('');
        navigate(`/order/${inputValue}`);
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    //affichage (render)
    return (
        <LoginFormStyled action="submit" onSubmit={handleSubmit}>
            <div>
                <h2>Bienvenue chez nous !</h2>
                <hr />
                <h3>Connectez vous</h3>
            </div> 
            <TextInput 
                value={inputValue} 
                onChange={handleChange} 
                placeholder={"Entrez votre prénom"} 
                required
                Icon={<BsPersonCircle className="icon" />}
            />

            <button className="button-with-icon">
                <span>Accéder à mon espace</span>
                <IoChevronForward className="icon" />
            </button>
            
        </LoginFormStyled>
    );
}

//styles
const LoginFormStyled = styled.form`
    
    max-width: 500px;
    min-width: 400px;
    padding: 2.5rem 2rem;
    border-radius: 5px;
    margin: 0px auto;
    font-family: 'Open Sans', sans-serif;

    hr {
        border: 1.5px solid ${theme.colors.red};
        margin-bottom: 40px;
        width: 100%;
    }

    h2 {
        font-family: 'Amatic SC', cursive;
        font-size: ${theme.fonts.P5};
        color: white;
    }

    h3 {
        font-family: 'Amatic SC', cursive;
        font-size: ${theme.fonts.P4};
        margin: 20px 10px 10px;
        color: white;
    }

    .button-with-icon {
        width: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        white-space: nowrap;
        text-decoration: none;
        line-height: 1;
        padding: 18px 24px;
        border: 1px solid ${theme.colors.primary_burger};
        border-radius: 5px;
        background-color: ${theme.colors.primary_burger};
        color: white;
        font-size: ${theme.fonts.P0};
        font-weight: 800;
        text-align: center;
        cursor: pointer;

        &:hover:not(:disabled) {
            background-color: white;
            color: ${theme.colors.primary_burger};
            border: 1px solid ${theme.colors.primary_burger};
            transition: all 200ms ease-out;
        }

        &:active {
            color: white;
            background-color: ${theme.colors.primary_burger};
            border: 1px solid ${theme.colors.primary_burger};
        }

        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: ${theme.fonts.P0};
            margin-left: 10px;
        }
    }
`;
    