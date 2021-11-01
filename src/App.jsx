import * as React from "react";
import "./index.css";

// Components
// import { Loading } from "./components/Loading";
import { Navbar } from "./components/Navbar";
import { IngredientBox } from "./components/IngredientBox";
import { Button } from "./components/Button";

import { defaultOrder, defaultBreads, defaultMeats, defaultVegetables, defaultSauces } from "./data";

class App extends React.Component {
  constructor() {
    super();
    this.state = { currentOrder: defaultOrder, isLoading: true, timerHandle: null,
    };
  }

  componentDidMount() { this.timerHandle = setTimeout(() => this.setState({ isLoading: false }), 2500); }
  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = null;
    }
  }

  render() {
    if (this.state.isLoading) { return ( <div>its loading</div> ); }
  
    return (
      <div className="min-h-screen bg-yellow-25">
        <Navbar />
        
        {/* Choose Bread */}
        <div id="ChooseBread" className="flex flex-col items-center justify-center my-5">
          <div className="my-3 text-3xl font-bold text-center text-red-1000">
            Choisissez le pain
          </div>

          <div className="flex flex-col items-center justify-center mt-5 space-x-4 sm:flex-row">
            {defaultBreads.map((bread) => (
              <div key={bread.name}>
                <IngredientBox name={bread.name} image={bread.image} />
              </div>
            ))}
          </div>
          <Button />
        </div>
        
        {/* Choose Meat */}
          <div id="ChooseMeat" className="flex flex-col items-center justify-center my-5">
            <div className="my-3 text-3xl font-bold text-center text-red-1000">
              Passons à la viande... ou au tofu ?
            </div>

            <div className="flex flex-col items-center justify-center mt-5 space-x-4 sm:flex-row">
              {defaultMeats.map((meat) => (
                <div key={meat.name}>
                  <IngredientBox name={meat.name} image={meat.image} />
                </div>
              ))}
            </div>
            <Button />
          </div>

        {/* Choose Vegetables */}
        <div id="ChooseVegetables" className="flex flex-col items-center justify-center my-5">
            <div className="my-3 text-3xl font-bold text-center text-red-1000">
              Des crudités pour votre merveille ?
            </div>

            <div className="flex flex-col items-center justify-center mt-5 space-x-4 sm:flex-row">
              {defaultVegetables.map((veg) => (
                <div key={veg.name}>
                  <IngredientBox name={veg.name} image={veg.image} />
                </div>
              ))}
            </div>
            <Button />
          </div>

        {/* Choose Sauces */}
        <div id="ChooseSauces" className="flex flex-col items-center justify-center my-5">
            <div className="my-3 text-3xl font-bold text-center text-red-1000">
              Des sauces pour donner de la couleur à cette magie ?
            </div>

            <div className="flex flex-col items-center justify-center mt-5 space-x-4 sm:flex-row">
              {defaultSauces.map((veg) => (
                <div key={veg.name}>
                  <IngredientBox name={veg.name} image={veg.image} />
                </div>
              ))}
            </div>
            <Button />
        </div>

      </div>
    );
}};

export default App;
