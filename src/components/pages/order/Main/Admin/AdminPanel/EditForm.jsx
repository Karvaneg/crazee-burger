import styled from "styled-components";
import { useContext } from "react";
import { getInputTextsConfig } from "./inputTextsConfig";
import OrderContext from "../../../../../../context/OrderContext";
import TextInput from "../../../../../reusable-ui/TextInput";
import ImagePreview from "./ImagePreview";

export default function EditForm() {
  // STATE
  const { productSelected, setProductSelected, handleUpdateProduct } =
    useContext(OrderContext);

  const inputTexts = getInputTextsConfig(productSelected);

  // COMPORTEMENTS
  const handleChange = (e) => {
    const { name, value } = e.target;
    const productBeingUpdated = {
      ...productSelected,
      [name]: value,
    };

    setProductSelected(productBeingUpdated); // met à jour le formulaire
    handleUpdateProduct(productBeingUpdated); // met à jour le menu
  };

  // AFFICHAGE (RENDER)
  return (
    <EditFormStyled>
      <ImagePreview
        imageSource={productSelected.imageSource}
        title={productSelected.title}
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
      {/* <div className="submit">{isSubmitted && <SubmitMessage />}</div> */}
    </EditFormStyled>
  );
}

const EditFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  width: 70%;
  height: 100%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;
  color: black;

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
