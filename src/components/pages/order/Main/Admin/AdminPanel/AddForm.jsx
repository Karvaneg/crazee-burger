import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { FiCheck } from "react-icons/fi";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import TextInput from "../../../../../reusable-ui/TextInput";
import Button from "../../../../../reusable-ui/Button";

const EMPTY_PRODUCT = {
  id: "",
  imageSource: "",
  title: "",
  price: 0,
};

export default function AddForm() {
  // state
  const { handleAddProduct } = useContext(OrderContext);

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProductToAdd = {
      // imageSource: newProduct.imageSource,
      // title: newProduct.title,
      // price: newProduct.price,
      // ces 3 lignes peuvent être remplacées tout simplement par :
      ...newProduct, //(dynamic property name)
      id: crypto.randomUUID(), //évite de devoir importer une librairie pour pouvoir utiliser UUID
    };
    handleAddProduct(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);

    displaySuccessMessage();
  };

  const handleChange = (e) => {
    // const newValue = e.target.value;
    // const nameInput = e.target.name;
    // setNewProduct({ ...newProduct, [nameInput]: newValue });

    // OU

    // const { name, value } = e.target; //ici on déstructure
    // setNewProduct({ ...newProduct, [name]: value });

    // OU

    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const displaySuccessMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt={newProduct.title} />
        ) : (
          <div className="empty-image">Aucune image</div>
        )}
      </div>
      <div className="input-fields">
        <TextInput
          name="title"
          type="text"
          placeholder="Nom du produit (ex: Super Burger)"
          value={newProduct.title}
          onChange={handleChange}
          Icon={<FaHamburger />}
          version="minimalist"
        />

        <TextInput
          name="imageSource"
          type="url"
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          pattern="https://.*"
          value={newProduct.imageSource}
          onChange={handleChange}
          Icon={<BsFillCameraFill />}
          version="minimalist"
        />

        <TextInput
          name="price"
          type="texte"
          placeholder="Prix"
          value={newProduct.price ? newProduct.price : ""}
          onChange={handleChange}
          Icon={<MdOutlineEuro />}
          version="minimalist"
        />
      </div>
      <div className="submit">
        <Button
          label={"Ajouter un nouveau produit au menu"}
          version="success"
        />
        {isSubmitted && (
          <div className="submit-message">
            <FiCheck />
            <span>Ajouté avec succès !</span>
          </div>
        )}
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  width: 70%;
  height: 100%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .image-preview {
    grid-area: 1 / 1 / 4 / 2;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }

    .empty-image {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${theme.colors.greyLight};
      line-height: 1.5;
      color: ${theme.colors.greySemiDark};
      border-radius: ${theme.borderRadius.round};
    }
  }

  .input-fields {
    grid-area: 1 / 2 / -2 / -1;
    display: grid;
    row-gap: 8px;

    // .text-input {
    //   background: #f5f5f7;
    //   border-radius: 5px;
    //   border: none;
    //   width: 100%;
    //   padding-top: 8px;
    //   padding-right: 16px;
    //   padding-bottom: 8px;
    //   padding-left: 24px;

    //   &::placeholder {
    //     color: #a7a8ad;
    //   }
    // }
  }

  .submit {
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;

    .submit-button {
      // border: 1px solid #60bd4f;
      // background: #60bd4f;
      //  color: white;
      //width: 50%;
      // height: 34.046875;
      // top: 129.14px;
      // left: 235.14px;
      // border-radius: 5px;
      // border-width: 1px;
      // padding-top: 10.52px;
      // padding-right: 29.25px;
      // padding-bottom: 9.53px;
      // padding-left: 29px;
    }
    .submit-message {
      color: #60bd4f;
    }
  }
`;
