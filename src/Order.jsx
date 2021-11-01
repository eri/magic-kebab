import { useState } from "react";
import * as Data from "./Data";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

export function OrderForm(props) {
  const ingredients = {
    sauces: [...Data.defaultBreads],
    meats: [...Data.defaultMeats],
    vegetables: [...Data.defaultVegetables],
    sauces: [...Data.defaultSauces],
  };

  const [selectedProducts, setSelectedProducts] = useState(
    ...Data.defaultOrder
  );

  const [bread, setBread] = useState("");
  const [meat, setMeat] = useState("");
  const [vegetables, setVegetables] = useState("");
  const [sauces, setSauces] = useState("");

  //   const [checkedState, setCheckedState] = useState(
  //     new Array(ingredients.length).fill(false)
  //   );

  const { onSubmit } = props;

  //   const handleOnChange = (position) => {
  //     const updatedCheckedState = checkedState.map((item, index) =>
  //       index === position ? true : item
  //     );

  const handleOnSelected = (productSelected) => {
    const updatedSelectedProducts = selectedProducts.map((initialProduct) =>
      initialProduct === productSelected.name ? productSelected = productSelected.value : false
    );

    setSelectedProducts(updatedSelectedProducts);

    // setCheckedState(updatedCheckedState);
    // const Finishedsauces = updatedCheckedState.reduce(
    //   (sauce, currentState, index) => {
    //     if (currentState === false) {
    //       switch (ingredients.vegetables) {
    //         case "salade":
    //           setSalade("");
    //           break;
    //         case "tomate":
    //           setTomate("");
    //           break;
    //         case "oignon":
    //           setOignon("");
    //           break;
    //         default:
    //           console.log("aucun changement");
    //       }
    //     }
    //     if (currentState === true) {
    //       switch (ingredients[index].categorie) {
    //         case "pains":
    //           setPain(ingredients[index].name);
    //           break;
    //         case "viandes":
    //           setViande(ingredients[index].name);
    //           break;
    //         case "salade":
    //           setSalade(ingredients[index].name);
    //           break;
    //         case "tomate":
    //           setTomate(ingredients[index].name);
    //           break;
    //         case "oignon":
    //           setOignon(ingredients[index].name);
    //           break;
    //         case "sauces":
    //           if (sauce.length < 2) {
    //             setSauces((sauce = [...sauce, " " + ingredients[index].name]));
    //           }
    //           return sauce;
    //         default:
    //           console.log("aucun changement");
    //       }
    //       return sauce;
    //     }
    //     return sauce;
    //   },
    // );

    setSauces(Finishedsauces);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ pain, viande, salade, tomate, oignon, sauces });
  };

  return (
    <ul className="toppings-sauce">
      <form className="add-form" onSubmit={handleSubmit}>
        {ingredients.map(({ name, categorie, image }, index) => {
          return (
            <li key={index}>
              <div className="toppings-sauce-item">
                <div className="left-section">
                  <input
                    key={index}
                    type="checkbox"
                    id={index}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label>{name}</label>
                </div>
              </div>
            </li>
          );
        })}
        <button type="submit">Commander</button>
      </form>
      <li>
        <div className="toppings-sauce-item">
          <div className="left-section">Total:</div>
          <div className="right-section">{sauces}</div>
        </div>
      </li>
    </ul>
  );
}
export default OrderForm;
