import * as React from "react";

import "../index.css";
import { buttonClassNames } from "./Button";

export class IngredientBox extends React.Component {
  render() {
    const { name, image, onSelected } = this.props;
    const className = [...buttonClassNames, onSelected ? "border-green-500" : "border-red-1000"];

    return (
      <div className={className.join(" ")}>
        <div className="text-xl font-medium text-red-1000">{name}</div>
        <img src={image} className="w-40 my-6" alt={name} />
      </div>
    );
  }
}
