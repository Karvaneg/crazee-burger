/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";

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
        <div>
          <FaHamburger />
          <input
            name="title"
            type="text"
            placeholder="Nom du produit (ex: Super Burger)"
            value={newProduct.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <BsFillCameraFill />
          <input
            name="imageSource"
            type="url"
            placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
            pattern="https://.*"
            value={newProduct.imageSource}
            onChange={handleChange}
          />
        </div>
        <div>
          <MdOutlineEuro />
          <input
            name="price"
            type="texte"
            placeholder="Prix"
            value={newProduct.price ? newProduct.price : ""}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="submitButton">
        <button>Ajouter un nouveau produit au menu</button>
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
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      border: 1px solid rgb(228, 229, 233);
      line-height: 1.5;
      color: rgb(147, 162, 177);
      border-radius: 5px;
    }
  }

  .input-fields {
    grid-area: 1 / 2 / -2 / -1;
    display: grid;
    row-gap: 8px;

    input {
      background: #f5f5f7;
      border-radius: 5px;
      border: none;
      width: 100%;
      padding-top: 8px;
      padding-right: 16px;
      padding-bottom: 8px;
      padding-left: 24px;

      &::placeholder {
        color: #a7a8ad;
      }
    }
  }

  .submitButton {
    grid-area: 4 / -2 / -1 / -1;

    button {
      border: 1px solid #60bd4f;
      background: #60bd4f;
      color: white;
      width: 275.25;
      height: 34.046875;
      top: 129.14px;
      left: 235.14px;
      border-radius: 5px;
      angle: 0 deg;
      opacity: 1;
      border-width: 1px;
      padding-top: 10.52px;
      padding-right: 29.25px;
      padding-bottom: 9.53px;
      padding-left: 29px;
    }
  }
`;
