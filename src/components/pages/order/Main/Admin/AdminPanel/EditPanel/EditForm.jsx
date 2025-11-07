import { useContext } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import EditInfoMessage from "./EditInfoMessage";
import Form from "../../AdminPanel/Form";

export default function EditForm() {
  // STATE
  const {
    productSelected,
    setProductSelected,
    handleUpdateProduct,
    titleEditRef,
  } = useContext(OrderContext);

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
    <Form onChange={handleChange} product={productSelected} ref={titleEditRef}>
      <EditInfoMessage />
    </Form>
  );
}
