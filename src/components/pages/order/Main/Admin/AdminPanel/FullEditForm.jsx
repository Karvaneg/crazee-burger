import styled from "styled-components";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import ImagePreview from "./ImagePreview";
import SubmitMessage from "./SubmitMessage";

export default function FullEditForm() {
  // //   return (
  // //     <FullEditFormStyled onSubmit="">
  // //       <ImagePreview
  // //       imageSource={modifyProduct.imageSource}
  // //       title={modifyProduct.title}
  // //       />
  // //       <div className="input-fields">
  // //         {inputTexts.map((input) => (
  // //           <TextInput
  // //             {...input}
  // //             key={input.id}
  // //             onChange={handleChange}
  // //             version="minimalist"
  // //           />
  // //         ))}
  // //       </div>
  // //       <div className="submit">{isSubmitted && <SubmitMessage />}</div>
  // //     </FullEditFormStyled>
  // //   );
}

const FullEditFormStyled = styled.form`
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
