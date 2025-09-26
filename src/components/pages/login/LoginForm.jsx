import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
            <h1>Bienvenue chez nous !</h1>
            <h2>Connectez vous</h2>
            <input 
                value={inputValue} 
                onChange={handleChange} 
                type="text" 
                placeholder="Entrez votre prénom..." 
                required/>
            <button>Accéder à votre espace</button>
        </LoginFormStyled>
    );
}

//styles
const LoginFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    margin: auto;

    h1 {
        font-size: 24px;
        margin-bottom: 10px;
        color: #333;
    }

    h2 {
        font-size: 18px;
        margin-bottom: 20px;
        color: #666;
    }

    input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
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
    