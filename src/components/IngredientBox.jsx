import * as React from "react";

import "../index.css";
import { defaultButtonClassNames, defaultButtonAnimationClassNames } from "./Button";

export class IngredientBox extends React.Component {
  render() {
    const { name, image, onSelected, isDisabled} = this.props;
    const className = [
      ...defaultButtonClassNames,
      "duration-500",
      "transform",
      "border-2",
      "border-opacity-40",
      onSelected
        ? "border-green-500 bg-green-300 bg-opacity-30"
        : "border-red-1000",
      isDisabled
        ? "cursor-not-allowed text-opacity-30" 
        : defaultButtonAnimationClassNames.join(" ") + " cursor-pointer"
    ];

    return (
      <div className={className.join(" ")}>
        <div className="text-xl font-medium text-red-1000">{name}</div>
        <img src={image} className="w-40 my-6" alt={name} />
      </div>
    );
  }
}
