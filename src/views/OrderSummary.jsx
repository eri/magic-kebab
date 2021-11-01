import * as React from "react";

import "../index.css";

import { Button } from "../components/Button";

export function OrderSummary(props) {
  return (
    <div className="flex flex-col items-center justify-center my-5">
      <div className="my-3 text-3xl font-bold text-center text-red-1000">
        Récapitulons votre commande...
      </div>
      <div className="flex flex-row items-center justify-center mt-5 space-x-4">
        {this.state.currentOrder.bread}
      </div>
      <div className="my-10">
        <Button />
      </div>
    </div>
  );
}
