import { useState } from "react";
import { ingredients } from "./orders";

/*
function BurgerForm(props) {
  const [pain, setPain] = useState("");
  const [viande, setViande] = useState("");
  const [salade, setSalade] = useState("");
  const [tomate, setTomate] = useState("");
  const [oignon, setOignon] = useState("");
  const [sauces, setSauces] = useState("");
  const { onSubmit } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ pain, viande, salade, tomate, oignon, sauces });
    setPain("");
    setViande("");
    setSalade("");
    setTomate("");
    setOignon("");
    setSauces("");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div>
        <label for="pain">Pain</label>
        <br />
        <input
          type="checkbox"
          name="pain"
          value="Pain"
          onClick={(e) => setPain(e.target.value)}
        />
        <label for="galette">Galette</label>
        <br />
        <input
          type="checkbox"
          name="galette"
          value="Galette"
          defaultChecked={(e) => setPain(e.target.value)}
        />
        <label for="baguette">Baguette</label>
        <br />
        <input
          type="checkbox"
          name="baguette"
          value="Baguette"
          onClick={(e) => setPain(e.target.value)}
        />
      </div>
      <div>
        <label for="viande">Viande</label>
        <br />
        <input
          type="checkbox"
          name="viande"
          value="Viande"
          onClick={(e) => setViande(e.target.value)}
        />
        <label for="tofu">Tofu</label>
        <br />
        <input
          type="checkbox"
          name="tofu"
          value="Tofu"
          onClick={(e) => setViande(e.target.value)}
        />
      </div>
      <div>
        <label for="salade">Salade</label>
        <br />
        <input
          type="checkbox"
          name="salade"
          value="Salade"
          onClick={(e) => setSalade(e.target.value)}
        />
      </div>
      <div>
        <label for="tomate">Tomate</label>
        <br />
        <input
          type="checkbox"
          name="tomate"
          value="Tomate"
          onClick={(e) => setTomate(e.target.value)}
        />
      </div>
      <div>
        <label for="oignon">Oignon</label>
        <br />
        <input
          type="checkbox"
          name="oignon"
          value="Oignon"
          onClick={(e) => setOignon(e.target.value)}
        />
      </div>
      <div>
        <label for="blanche">Blanche</label>
        <br />
        <input
          type="checkbox"
          name="blanche"
          value="Blanche"
          onClick={(e) => setSauces([e.target.value])}
        />
        <label for="andalouse">Andalouse</label>
        <br />
        <input
          type="checkbox"
          name="andalouse"
          value="Andalouse"
          onClick={(e) => setSauces([e.target.value])}
        />
        <label for="harissa">Harissa</label>
        <br />
        <input
          type="checkbox"
          name="harissa"
          value="Harissa"
          onClick={(e) => setSauces([e.target.value])}
        />
        <label for="BBQ">BBQ</label>
        <br />
        <input
          type="checkbox"
          name="BBQ"
          value="BBQ"
          onClick={(e) => setSauces([e.target.value])}
        />
        <label for="ketchup">Ketchup</label>
        <br />
        <input
          type="checkbox"
          name="ketchup"
          value="Ketchup"
          onClick={(e) => setSauces([e.target.value])}
        />
        <label for="curry">Curry</label>
        <br />
        <input
          type="checkbox"
          name="curry"
          value="Curry"
          onClick={(e) => setSauces([e.target.value])}
        />
      </div>
      <br />
      <button type="submit">Ajouter</button>
    </form>
  );
}
*/

function KebabForm(props) {
  const [pain, setPain] = useState("");
  const [viande, setViande] = useState("");
  const [salade, setSalade] = useState("");
  const [tomate, setTomate] = useState("");
  const [oignon, setOignon] = useState("");
  const [sauces, setSauces] = useState("Vide");
  const [checkedState, setCheckedState] = useState(
    new Array(ingredients.length).fill(false)
  );
  const { onSubmit } = props;

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    const Finishedsauces = updatedCheckedState.reduce(
      (sauce, currentState, index) => {
        if (currentState === false) {
          switch (ingredients[index].categorie) {
            case "salade":
              setSalade("");
              break;
            case "tomate":
              setTomate("");
              break;
            case "oignon":
              setOignon("");
              break;
            default:
              console.log("aucun changement");
          }
        }
        if (currentState === true) {
          switch (ingredients[index].categorie) {
            case "pains":
              setPain(ingredients[index].name);
              break;
            case "viandes":
              setViande(ingredients[index].name);
              break;
            case "salade":
              setSalade(ingredients[index].name);
              break;
            case "tomate":
              setTomate(ingredients[index].name);
              break;
            case "oignon":
              setOignon(ingredients[index].name);
              break;
            case "sauces":
              if (sauce.length < 2) {
                setSauces((sauce = [...sauce, " " + ingredients[index].name]));
              }
              return sauce;
            default:
              console.log("aucun changement");
          }
          return sauce;
        }
        return sauce;
      },
      ""
    );

    setSauces(Finishedsauces);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ pain, viande, salade, tomate, oignon, sauces });
  };

  return (
    <div className="App">
      <h3>Select Toppings</h3>
      <ul className="toppings-sauce">
        <form className="add-form" onSubmit={handleSubmit}>
          {ingredients.map(({ name, categorie, image }, index) => {
            return (
              <li key={index}>
                <div className="toppings-sauce-item">
                  <div className="left-section">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={name}
                      value={name}
                      checked={checkedState[index]}
                      onChange={() => handleOnChange(index)}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
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
    </div>
  );
}
export default KebabForm;
