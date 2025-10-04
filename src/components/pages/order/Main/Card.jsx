import styled from "styled-components";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";

export default function Card({ title, imageSource, price }) {
  return (
    <CardStyled>
        <div className="image"><img src={imageSource} alt={title} /></div>
        <div className="info-text">
            <div className="title">{title}</div>
            <div className="description">
                <div className="price">{price}</div>
                <PrimaryButton 
                //on hydrate le composant avec des props (de la data)
                    label={"Ajouter"}
                />
            </div>
        </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
  border: 1px solid red;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: 15px;
  width: 240px;
  height: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .image {
    border: 1px solid purple;
    border-radius:  15px 15px 0 0 ;
    width: 200px;
    height: 145px;
    top: 50px;
    left: 20px;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  .info-text {
    border: 1px solid purple;
    border-radius: 0 0 15px 15px;

    .title{
      font-family: Amatic SC;
      font-weight: 700;
      font-style: Bold;
      font-size: 36px;
      leading-trim: NONE;
      line-height: 100%;
      letter-spacing: 0%;
      vertical-align: middle;

    }
    .description {
      display: flex;
      width: 190;
      height: 66.5;

      .price{
        font-family: Open Sans;
        font-weight: 400;
        font-style: Regular;
        font-size: 16px;
        leading-trim: NONE;
        line-height: 22px;
        letter-spacing: 0%;
        vertical-align: middle;
      }
    }
  }

`;
