import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";


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
            <div>
                <TextInput 
                //on hydrate le composant avec des props (de la data)
                    value={inputValue} 
                    onChange={handleChange} 
                    placeholder={"Entrez votre prénom"} 
                    required 
                    Icon={<BsPersonCircle className="icon" />}
                />

                <PrimaryButton 
                //on hydrate le composant avec des props (de la data)
                    label={"Accéder à mon espace"}
                    Icon={<IoChevronForward className="icon" />}
                />
            </div>
        </LoginFormStyled>
    );
}

//styles
const LoginFormStyled = styled.form`
    max-width: 500px;
    min-width: 400px;
    padding: 2.5rem 2rem;
    border-radius: ${theme.borderRadius.round};
    margin: 0px auto;
    font-family: 'Open Sans', sans-serif;
    text-align: center;

    hr {
        border: 1.5px solid ${theme.colors.loginLine};
        margin-bottom: 40px;
        width: 100%;
    }

    h2 {
        font-family: 'Amatic SC', cursive;
        font-size: ${theme.fonts.size.P5};
        color: ${theme.colors.white};
    }

    h3 {
        font-family: 'Amatic SC', cursive;
        font-size: ${theme.fonts.size.P4};
        margin: 20px 10px 10px;
        color: ${theme.colors.white};
    }

    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${theme.fonts.size.P0};
        margin-left: 10px;
    }
`;
    