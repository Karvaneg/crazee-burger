import { useState } from "react";

export const useSuccessMessage = (timeDelay = 2000) => {
  // state
  const [isSubmitted, setIsSubmitted] = useState(false);

  // comportements
  const displaySuccessMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, timeDelay);
  };

  // dans un hook, pas d'affichage ; on retourne uniquement des valeurs ou des fonctions

  return { isSubmitted, displaySuccessMessage };
};
