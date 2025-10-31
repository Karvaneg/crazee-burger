import styled from "styled-components";
import { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import TextInput from "../../../../../reusable-ui/TextInput";
import Button from "../../../../../reusable-ui/Button";
import ImagePreview from "./ImagePreview";
import SubmitMessage from "./SubmitMessage";
import { getInputTextsConfig } from "./inputTextsConfig";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";

export default function AddForm() {
  // STATE
  const { handleAddProduct, newProduct, setNewProduct } =
    useContext(OrderContext);

  const [isSubmitted, setIsSubmitted] = useState(false);

  // COMPORTEMENTS
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

  const inputTexts = getInputTextsConfig(newProduct);

  //AFFICHAGE (RENDER)
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            {...input}
            key={input.id}
            onChange={handleChange}
            version="minimalist"
          />
        ))}
      </div>
      <div className="submit">
        <Button
          label={"Ajouter un nouveau produit au menu"}
          version="success"
        />
        {isSubmitted && <SubmitMessage />}
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

  .input-fields {
    grid-area: 1 / 2 / -2 / -1;
    display: grid;
    row-gap: 8px;
  }

  .submit {
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
  }
`;
