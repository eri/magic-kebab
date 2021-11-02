import * as React from "react";

import { Navbar } from "./Navbar";

import "../index.css";

export class CartDisplay extends React.Component {
  render() {
    const { orders } = this.props;
    return (
      <div className="min-h-screen bg-yellow-25">
        <Navbar />
        <div className="flex flex-col items-center justify-center my-5">
          <div className="my-3 text-3xl font-bold text-center text-red-1000">
            Contenu de votre panier
            <div className="text-sm font-medium">
              Vous y êtes presque ! Vérifiez votre panier avant de passer
              commande. Modifiez les quantités si nécessaire.
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-5 space-y-2 sm:flex-row">
            {orders.map((o, index) => (
              <div className="px-10 py-2 bg-gray-400 rounded-md bg-opacity-30 text-red-1000">
                <div className="text-xl font-semibold">
                  Commande #{index + 1}
                </div>
                <div className="text-sm font-semibold">
                  {o.bread}, {o.meat},{" "}
                  {o.vegetables.length > 0
                    ? `${o.vegetables.length} crudités`
                    : `Sans crudités`}
                  ,{" "}
                  {o.vegetables.length > 0
                    ? `${o.sauces.length} sauces`
                    : `Sans sauce`}
                </div>
                <div className="my-2 text-sm font-semibold">
                    {o.price}€
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-row px-2 py-1 my-10 font-bold bg-red-1000 text-yellow-25">
            Total: {orders.reduce((acc, o) => acc + o.price, 0)}€
          </div>
        </div>
      </div>
    );
  }
}
