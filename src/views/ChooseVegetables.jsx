import * as React from "react";

import "../index.css";
import { buttonClassNames } from "../components/Button";

import { IngredientBox } from "../components/IngredientBox";
import { Button } from "../components/Button";

import { defaultVegetables } from "../data";

export class ChooseVegetables extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.order };
  }

  render() {
    const classNames = [...buttonClassNames, "border-red-1000", "my-5", "font-semibold"]
    
    return (
      <div className="flex flex-col items-center justify-center my-5 text-red-1000">
        <div className="my-3 text-3xl font-bold text-center">
          Des crudités pour votre merveille ?
        </div>
        <div className="flex flex-row items-center justify-center mt-5 space-x-4">
          {defaultVegetables.map((veg) => (
            <IngredientBox name={veg.name} image={veg.image} />
          ))}
        </div>
        <div className={classNames.join(" ")}>
          Je continue sans crudités
        </div>
        <div className="my-10">
          <Button />
        </div>
      </div>
    );
  }
}
