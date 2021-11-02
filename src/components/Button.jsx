import * as React from "react";

import "../index.css";

export const defaultButtonClassNames = [
  "px-4",
  "py-2",
  "ease-in-out",
  "rounded-md",
  "transition",
];

export const defaultButtonAnimationClassNames = [
  "hover:bg-opacity-50",
  "hover:-translate-y-1",
  "hover:scale-110",
  "hover:border-opacity-100",
]

export class Button extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <div className="px-4 py-2 transition transform rounded-md cursor-pointer duration-500ease-in-out bg-red-1000 hover:bg-opacity-90 hover:-translate-y-1 hover:scale-110">
        <div className="text-xl font-medium text-yellow-25">{text}</div>
      </div>
    );
  }
}
