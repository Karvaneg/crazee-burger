import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export const getInputTextsConfig = (newProduct) => [
  {
    id: "0",
    name: "title",
    type: "text",
    placeholder: "Nom du produit (ex: Super Burger)",
    value: newProduct.title,
    Icon: <FaHamburger />,
  },
  {
    id: "1",
    name: "imageSource",
    type: "url",
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    value: newProduct.imageSource,
    Icon: <BsFillCameraFill />,
  },
  {
    id: "2",
    name: "price",
    type: "texte",
    placeholder: "Prix",
    value: newProduct.price ? newProduct.price : "",
    Icon: <MdOutlineEuro />,
  },
];
