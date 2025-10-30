import styled from "styled-components";
import { useContext, useState } from "react";
import { getInputTextsConfig } from "./inputTextsConfig";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";
import OrderContext from "../../../../../../context/OrderContext";
import TextInput from "../../../../../reusable-ui/TextInput";
import ImagePreview from "./ImagePreview";

export default function EditForm() {
  const { productSelected } = useContext(OrderContext);
  const [productBeingEdited, setproductBeingEdited] = useState(EMPTY_PRODUCT);

  const inputTexts = getInputTextsConfig(productSelected);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setproductBeingEdited({
      ...productBeingEdited,
      [name]: value,
    });
  };

  //affichage
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
