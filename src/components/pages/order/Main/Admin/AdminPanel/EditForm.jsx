import styled from "styled-components"
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export default function AddForm() {
  return (
    <AddFormStyled action="">
        <div className="image-preview">
            <div class="empty-image">Aucune image</div>
            <img src="" alt="" />
        </div>
        <div className="input-fields">
            <div>
            <FaHamburger />
            <input type="text" id="title" name="title" placeholder="Nom du produit (ex: Super Burger)" />
            </div>
            <div>
            <BsFillCameraFill />
            <input
                type="url"
                name="imageSource"
                id="url"
                placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
                pattern="https://.*"
            />
            </div>
            <div>
            <MdOutlineEuro />
            <input type="texte" name="price" placeholder="Prix"/>
            </div>
        </div>
        <div className="submitButton">
            <button>Modifier le produit du menu</button>
        </div>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`

    
      display: grid;
      grid-template-columns: 20% 1fr;
      grid-template-rows: 70% 1fr;
      gap: 8px 20px;
      width: 70%;
      height: 11em;
      margin: auto 0px;
      -webkit-box-pack: start;
      justify-content: flex-start;
      align-self: flex-start;

      .image-preview {
        grid-area: 1 / 1 / 2 / 2;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;

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
        grid-area: 1 / 2 / 2 / 3;
        display: grid;
       // grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        row-gap: 8px;

        input {
          background: #F5F5F7;
          border-radius: 5px;
          border: none;
          width: 100%;
          // display: flex;
          // -webkit-box-align: center;
          align-items: center;
          padding-top: 8px;
          padding-right: 16px;
          padding-bottom: 8px;
          padding-left: 24px;


          &::placeholder{
            color: #A7A8AD;
          }
        }
      }

      .submitButton {
        grid-area: 2 / 2 / 3 / 3;
        display: flex;
        -webkit-box-align: center;
        align-items: center;

        button {
          border: 1px solid #60BD4F;
          background: #60BD4F;
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