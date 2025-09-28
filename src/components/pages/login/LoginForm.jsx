import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsPersonCircle } from "react-icons/bs";


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
            <h2>Bienvenue chez nous !</h2>
            <hr />
            <h3>Connectez vous</h3>
            <div className="input-with-icon">
                <BsPersonCircle className="icon" />
                <input 
                    value={inputValue} 
                    onChange={handleChange} 
                    type="text" 
                    placeholder="Entrez votre prénom" 
                    required
                />
            </div>
            <button>Accéder à mon espace</button>
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
    font-family: 'Amatic SC', cursive;

    hr {
        border: 1.5px solid ${theme.colors.red};
        margin-bottom: 40px;
        width: 100%;
    }

    h2 {
        font-size: ${theme.fonts.P5};
        color: white;
    }

    h3 {
        font-size: ${theme.fonts.P4};
        margin: 20px 10px 10px;
        color: white;
    }

    .input-with-icon {
        background-color: white;
        border-radius: 5px;
        display: flex;
        align-items: center;
        padding: 18px 24px;
        margin: 18px 0;

        .icon{
            font-size: ${theme.fonts.P0};
            color: ${theme.colors.greySemiDark};
            margin-right: 8px;
        }

        input{
            border: none;
            font-size: ${theme.fonts.P0};
            colors: ${theme.colors.dark};
        }

        &::placeholder {
            background-color: white;
            color: ${theme.colors.greyLight};
        }
    }

    button {
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: #28a745;
        color: white;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #218838;
    }
`;
    