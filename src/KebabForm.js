import { useState } from "react";
//import { pains, viandes, sauces, crudites } from "./orders";

function BurgerForm(props) {
  const [pain, setPain] = useState("");
  const [viande, setViande] = useState("");
  const [salade, setSalade] = useState("");
  const [tomate, setTomate] = useState("");
  const [oignon, setOignon] = useState("");
  const [sauces, setSauces] = useState([""]);
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
          onChange={(e) => setPain(e.target.value)}
        />
        <label for="galette">Galette</label>
        <br />
        <input
          type="checkbox"
          name="galette"
          value="Galette"
          onChange={(e) => setPain(e.target.value)}
        />
        <label for="baguette">Baguette</label>
        <br />
        <input
          type="checkbox"
          name="baguette"
          value="Baguette"
          onChange={(e) => setPain(e.target.value)}
        />
      </div>
      <div>
        <label for="viande">Viande</label>
        <br />
        <input
          type="checkbox"
          name="viande"
          value="Viande"
          onChange={(e) => setViande(e.target.value)}
        />
        <label for="tofu">Tofu</label>
        <br />
        <input
          type="checkbox"
          name="tofu"
          value="Tofu"
          onChange={(e) => setViande(e.target.value)}
        />
      </div>
      <div>
        <label for="salade">Salade</label>
        <br />
        <input
          type="checkbox"
          name="salade"
          value="Salade"
          onChange={(e) => setSalade(e.target.value)}
        />
      </div>
      <div>
        <label for="tomate">Tomate</label>
        <br />
        <input
          type="checkbox"
          name="tomate"
          value="Tomate"
          onChange={(e) => setTomate(e.target.value)}
        />
      </div>
      <div>
        <label for="oignon">Oignon</label>
        <br />
        <input
          type="checkbox"
          name="oignon"
          value="Oignon"
          onChange={(e) => setOignon(e.target.value)}
        />
      </div>
      <div>
        <label for="blanche">Blanche</label>
        <br />
        <input
          type="checkbox"
          name="blanche"
          value="Blanche"
          onChange={(e) => setSauces([e.target.value])}
        />
        <label for="andalouse">Andalouse</label>
        <br />
        <input
          type="checkbox"
          name="andalouse"
          value="Andalouse"
          onChange={(e) => setSauces([e.target.value])}
        />
        <label for="harissa">Harissa</label>
        <br />
        <input
          type="checkbox"
          name="harissa"
          value="Harissa"
          onChange={(e) => setSauces([e.target.value])}
        />
        <label for="BBQ">BBQ</label>
        <br />
        <input
          type="checkbox"
          name="BBQ"
          value="BBQ"
          onChange={(e) => setSauces([e.target.value])}
        />
        <label for="ketchup">Ketchup</label>
        <br />
        <input
          type="checkbox"
          name="ketchup"
          value="Ketchup"
          onChange={(e) => setSauces([e.target.value])}
        />
        <label for="curry">Curry</label>
        <br />
        <input
          type="checkbox"
          name="curry"
          value="Curry"
          onChange={(e) => setSauces([e.target.value])}
        />
      </div>
      <br />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default BurgerForm;
