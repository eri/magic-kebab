import * as React from "react";

import "../index.css";
import { Button, buttonClassNames } from "../components/Button";
import { IngredientBox } from "../components/IngredientBox";

// import { selectedProducts, setSelectedProducts } from "../Order";
// import { sauces, setSauces } from "../Order";

import { defaultSauces } from "../data";

export function ChooseSauces(props) {
  
  return (
    <div className="flex flex-col items-center justify-center my-5 text-red-1000">

      <div className="my-3 text-3xl font-bold text-center">
        Des sauces pour donner de la couleur à cette magie ?
      </div>

      <div className="flex flex-wrap items-center justify-center mt-5 px-80">
        {defaultSauces.map((s) => (
          <div className="m-2">
            <IngredientBox name={s.name} image={s.image}/>
          </div>
        ))}
      </div>

      <div className={buttonClassNames.join(" ")}>Choisir sans sauce</div>
      <div className="my-10">
        <Button />
      </div>
    </div>
  );
}
