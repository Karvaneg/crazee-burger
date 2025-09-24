import { useState } from "react";

export default function LoginForm() {

    //state
    const [inputValue, setInputValue] = useState('');

    //comportements
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Bonjour ${inputValue} !`);
        setInputValue('');
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    //affichage (render)
    return (
        <form action="submit" onSubmit={handleSubmit}>
            <input 
                value={inputValue} 
                onChange={handleChange} 
                type="text" 
                placeholder="Entrez votre prénom..." 
                required/>
        </form>
    );
}
    