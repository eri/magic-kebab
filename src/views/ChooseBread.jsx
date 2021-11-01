import * as React from "react";

import "../index.css";

import { IngredientBox } from "../components/IngredientBox";
import { OrderSummary } from "./OrderSummary";
import { Button } from "../components/Button";
import { defaultBreads } from "../data";

// import { selectedProducts } from "../Order";

export function ChooseBread(props) {

  return (
      <div className={`flex flex-col items-center justify-center hidden my-5`}>
        <div className={`my-3 text-3xl font-bold text-center text-red-1000`}>
          Choisissez le pain
        </div>
        <div className="flex flex-col items-center justify-center mt-5 space-x-4 sm:flex-row">
          {defaultBreads.map((bread) => (
            <div key={bread.name}>
              <IngredientBox
                name={bread.name}
                image={bread.image}
              />
            </div>
          ))}
        </div>
        <div className="my-10">
          <Button onClick={OrderSummary}/>
        </div>
      </div>
    );
  }
