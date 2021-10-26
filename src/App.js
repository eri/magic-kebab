import { useState } from "react";
import KebabForm from "./KebabForm";
import { currentOrder } from "./orders";
import "./App.css";
import KebabOrder from "./KebabOrder";

function App() {
  const [kebaborder, setKebabs] = useState(currentOrder);

  const deleteKebab = (kebaborder) => {
    const initialKebab = kebaborder;
    setKebabs(initialKebab);
  };

  const makeKebab = (kebaborder) => {
    setKebabs(kebaborder);
  };

  const orderKebab = (
    <KebabOrder kebab={kebaborder} deleteKebab={deleteKebab} />
  );

  return (
    <>
      <div className="orders_block">{orderKebab}</div>
      <KebabForm onSubmit={makeKebab} />
    </>
  );
}

export default App;
