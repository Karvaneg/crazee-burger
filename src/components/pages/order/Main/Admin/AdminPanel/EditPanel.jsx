import { useContext, useState } from "react";
import EmptyEditPanel from "./EmptyEditPanel";
import EditForm from "./EditForm";
import OrderContext from "../../../../../../context/OrderContext";

export default function EditPanel() {
  const { productSelected } = useContext(OrderContext);
  // STATE

  // COMPORTEMENTS
  // Si aucun produit sélectionné → on affiche le panneau vide
  if (!productSelected || !productSelected.id) {
    return <EmptyEditPanel />;
  }

  // AFFICHAGE (RENDER)

  return <EditForm />;
}
