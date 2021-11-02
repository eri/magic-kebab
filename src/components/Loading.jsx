import * as React from "react";

import "../index.css";
import logo from "../assets/logo.svg";

export class Loading extends React.Component {
    render() {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-25">
          <img src={logo} alt="logo" className="w-56 animate-pulse" />
          <div className="w-1/3 my-5 text-sm font-medium text-center animate-pulse text-red-1000">
              Le saviez-vous ? Un mélange de dinde et de poulet est utilisé pour la viande car la viande d'agneau a un goût très fort par la population occidentale.
          </div>
        </div>
      );
    }
  }