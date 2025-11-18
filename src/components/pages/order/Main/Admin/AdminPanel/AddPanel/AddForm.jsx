import { useContext } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../../../enums/product";
import Form from "../Form";
import SubmitButton from "../SubmitButton";
import { useSuccessMessage } from "../../../../../../../hooks/useSuccessMessage";
import { replaceFrenchCommaWithDot } from "../../../../../../../utils/maths";

// Grâce au hook on a un code qui a des states qui consomment les states de useContext et useSuccessMessage et uniquement des gestionnaires de comportements, puis qui gère l'affichage

export default function AddForm() {
  // STATE
  const { handleAddProduct, newProduct, setNewProduct } =
    useContext(OrderContext);

  const { isSubmitted, displaySuccessMessage } = useSuccessMessage(5000);

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
      price: replaceFrenchCommaWithDot(newProduct.price), //on remplace la virgule par un point pour le prix et on transforme en number (pour ne pas envoyer une string)
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

  //AFFICHAGE (RENDER)
  return (
    <Form onSubmit={handleSubmit} onChange={handleChange} product={newProduct}>
      <SubmitButton isSubmitted={isSubmitted} />
    </Form>
  );
}
