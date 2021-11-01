import * as React from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

import "../index.css";

import { IngredientBox } from "../components/IngredientBox";
import { Button } from "../components/Button";

import { defaultMeats } from "../data";

export function ChooseBread(props) {
  return (
    <div className="flex flex-col items-center justify-center my-5">
      <div className="my-3 text-3xl font-bold text-center text-red-1000">
        Passons à la viande... ou au tofu ?
      </div>
      <div className="flex flex-row items-center justify-center mt-5 space-x-4">
        {defaultMeats.map((meat) => (
          <IngredientBox
            name={meat.name}
            image={meat.image}
            onSelected={
              this.state.meat && this.state.meat === meat.name ? true : false
            }
          />
        ))}
      </div>
      <div className="my-10">
        <Button />
      </div>
    </div>
  );
}
