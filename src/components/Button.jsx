import * as React from "react";

import "../index.css";

export const buttonClassNames = [
  "px-4",
  "py-2",
  "transition",
  "duration-500",
  "ease-in-out",
  "transform",
  "border-2",
  "rounded-md",
  "cursor-pointer",
  "border-opacity-40",
  "hover:bg-opacity-80",
  "hover:-translate-y-1",
  "hover:scale-110",
  "hover:border-opacity-100",
];

export class Button extends React.Component {
  render() {
    return (
      <div className="px-4 py-2 my-10 transition transform rounded-md cursor-pointer duration-500ease-in-out bg-red-1000 hover:bg-opacity-90 hover:-translate-y-1 hover:scale-110">
        <div className="text-xl font-medium text-gray-100">Suivant</div>
      </div>
    );
  }
}
