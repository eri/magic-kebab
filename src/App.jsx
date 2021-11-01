import * as React from "react";
import "./index.css";

// Components
// import { Loading } from "./components/Loading";
import { Navbar } from "./components/Navbar";
import { IngredientBox } from "./components/IngredientBox";
import { Button } from "./components/Button";

import { defaultOrder, defaultBreads, defaultMeats, defaultVegetables, defaultSauces } from "./data";

function App() {
  const [currentOrder, setCurrentOrder] = React.useState(defaultOrder);
  const [isLoading, setIsLoading] = React.useState(true);
  const [timerHandle, setTimerHandle] = React.useState(null);
  const [orderDisplay, setOrderDisplay] = React.useState({bread: true, meat: false, vegetables: false, sauces: false});
  const [orderLimited, setOrderLimited] = React.useState({"vegetables": { limited: false, amount: 3}, "sauces": { limited: false, amount: 2}});

  React.useEffect(() => { 
    setTimerHandle(setTimeout(() => setIsLoading(false), 2500));
    return () => {
      clearTimeout(timerHandle);
      setTimerHandle(null);
    };
  }, [setTimerHandle]);

  if (isLoading) { return ( <div>its loading</div> ); }

  const handleOnSelected = (ingredient, value, display) => {
      const newOrder = {...currentOrder};
      newOrder[ingredient] = value;
      setCurrentOrder(newOrder);
      if (display) { handleDisplay(display.hide, display.show); }
  }
  
  const handleOnAdded = (ingredient, value) => {
    if (handleOrderLimited(ingredient)) { return false };
    const newOrder = {...currentOrder};
    newOrder[ingredient].push(value);
    setCurrentOrder(newOrder);
  }

  const handleOrderLimited = (ingredient) => {
    const newLimit = {...orderLimited};
    if (currentOrder[ingredient].length === orderLimited[ingredient].amount) {
      console.log("limited: ", currentOrder[ingredient].length, orderLimited[ingredient].amount);
      newLimit[ingredient].limited = true;
      setOrderLimited(newLimit);
      return true;
    }
    // console.log("not limited:", currentOrder[ingredient].length, orderLimited[ingredient].amount);
    return false;
  }

  const handleDisplay = (toHide, toShow) => {
    // Used to toggle the display of vegetables & sauces
    const canDisplay = {...orderDisplay};
    canDisplay[toHide] = false;
    canDisplay[toShow] = true;
    setOrderDisplay(canDisplay);
  }

    return (
      <div className="min-h-screen bg-yellow-25">
        <Navbar />
        {console.log(currentOrder)}
        {console.log(orderLimited)}
        
        {/* Choose Bread */}
        <div id="ChooseBread" className={
          `flex flex-col items-center justify-center my-5 ${orderDisplay.bread ? ' block' : ' hidden'}`
        }>

          <div className="my-3 text-3xl font-bold text-center text-red-1000">
            Choisissez le pain
          </div>

          <div className="flex flex-col items-center justify-center mt-5 space-x-4 sm:flex-row">
            {defaultBreads.map((bread) => (
              <div key={bread.name} onClick={() => handleOnSelected('bread', bread.name, {hide:'bread', show:'meat'})}>
                <IngredientBox name={bread.name} image={bread.image} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Choose Meat */}
        <div id="ChooseMeat" className={
          `flex flex-col items-center justify-center my-5 ${orderDisplay.meat && !orderDisplay.bread ? ' block' : ' hidden'}`
        }>
            
            <div className="my-3 text-3xl font-bold text-center text-red-1000">
              Passons à la viande... ou au tofu ?
            </div>

            <div className="flex flex-col items-center justify-center mt-5 space-x-4 sm:flex-row">
              {defaultMeats.map((meat) => (
                <div key={meat.name} onClick={() => handleOnSelected('meat', meat.name, {hide:'meat', show:'vegetables'})}>
                  <IngredientBox name={meat.name} image={meat.image} />
                </div>
              ))}
            </div>
            <div onClick={() => handleDisplay('meat', 'bread')}>
              <Button text={"Précédent"} />
            </div>
          </div>

        {/* Choose Vegetables */}
        <div id="ChooseVegetables" className={
          `flex flex-col items-center justify-center my-5 ${orderDisplay.vegetables && !orderDisplay.meat ? ' block' : ' hidden'}`
        }>
            <div className="my-3 text-3xl font-bold text-center text-red-1000">
              Des crudités pour votre merveille ?
            </div>

            <div className="flex flex-col items-center justify-center mt-5 space-x-4 sm:flex-row">
              {defaultVegetables.map((veg) => (
                <div key={veg.name} onClick={() => handleOnAdded('vegetables', veg.name)}>
                  <IngredientBox name={veg.name} image={veg.image} isDisabled={() => handleOrderLimited('vegetables')} />
                </div>
              ))}
            </div>
            <div onClick={() => handleDisplay('vegetables', 'meat')}>
              <Button text={"Précédent"} />
            </div>

            <div onClick={() => handleDisplay('vegetables', 'sauces')}>
              <Button text={"Suivant"} />
            </div>
          </div>

        {/* Choose Sauces */}
        <div id="ChooseSauces" className={
          `flex flex-col items-center justify-center my-5`
          + `${currentOrder.bread && currentOrder.meat}` ? `hidden` : `hidden`
          }>
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
};

export default App;
