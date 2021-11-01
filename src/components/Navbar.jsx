import * as React from "react";

import "../index.css";
import logo_colored from "../assets/logo_colored.png";

export class Navbar extends React.Component {
  render() {
    return (
      <div className="flex flex-row items-center justify-center bg-yellow-25">
        <img src={logo_colored} className="my-10 w-50" alt="magic_kebab_logo"/>
      </div>
    );
  }
}
