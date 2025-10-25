import styled from "styled-components";
import ImagePreview from "./ImagePreview";

export default function EditForm({ productSelected }) {
  //affichage
  return (
    <EditFormStyled>
      <ImagePreview
        imageSource={productSelected.imageSource}
        title={productSelected.title}
      />
      <div className="input-fields">
        <p>{productSelected.title}</p>
        <p>{productSelected.imageSource}</p>
        <p>{productSelected.price}</p>
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
