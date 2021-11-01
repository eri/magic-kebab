import * as React from "react";
// import { Redirect } from "react-router";
// import { useState } from "react";
import "../index.css";

import { IngredientBox } from "../components/IngredientBox";
import { OrderSummary } from "./OrderSummary";
import { Button } from "../components/Button";
import { defaultBreads } from "../data";

export class ChooseBread extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.order };
  }

  onBreadSelection = () => {
    const { bread } = this.state;
    this.setState({ ...this.state, currentOrder: {...this.state.currentOrder, bread: bread.name }});
  };

  render() {
    return (
      <div className="flex flex-col items-center justify-center my-5">
        <div className="my-3 text-3xl font-bold text-center text-red-1000">
          Choisissez le pain
        </div>
        <div className="flex flex-col items-center justify-center mt-5 space-x-4 sm:flex-row">
          {defaultBreads.map((bread) => (
            <div key={bread.name}>
              <IngredientBox
                name={bread.name}
                image={bread.image}
                onSelected={
                  this.state.bread && this.state.bread === bread.name
                    ? true
                    : false
                }
                onClick={this.onBreadSelection}
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
}
