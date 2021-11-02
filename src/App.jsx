import * as React from "react";
import "./index.css";

// Components
import { Loading } from "./components/Loading";
import { Navbar } from "./components/Navbar";
import { IngredientBox } from "./components/IngredientBox";
import { Button } from "./components/Button";

import { defaultOrder, defaultBreads, defaultMeats, defaultVegetables, defaultSauces } from "./data";
import { CartDisplay } from "./components/CartDisplay";

function App() {
  const [allOrders, setAllOrders] = React.useState([]);
  const [currentOrder, setCurrentOrder] = React.useState(defaultOrder);

  const [isLoading, setIsLoading] = React.useState(true);
  const [timerHandle, setTimerHandle] = React.useState(null);

  const [orderDisplay, setOrderDisplay] = React.useState({summary: false, bread: true, meat: false, vegetables: false, sauces: false});
  const [orderLimited, setOrderLimited] = React.useState({"vegetables": { limited: false, amount: 4}, "sauces": { limited: false, amount: 2}});

  React.useEffect(() => { 
    setTimerHandle(setTimeout(() => setIsLoading(false), 3000));
    return () => {
      clearTimeout(timerHandle);
      setTimerHandle(null);
    };
  }, [setTimerHandle]);

  if (isLoading) { return <Loading />; }

  if (allOrders.length > 0) { return <CartDisplay orders={allOrders} />; }

  const handleOnSelected = (ingredient, value, display) => {
      const newOrder = {...currentOrder};
      newOrder[ingredient] = newOrder[ingredient] !== value ? value : null;
      setCurrentOrder(newOrder);
      if (display) { handleDisplay(display.hide, display.show); }
  }
  
  const handleOnAdded = (ingredient, value) => {
    if (handleOrderLimited(ingredient) && !currentOrder[ingredient].includes(value)) { return false };
    const newOrder = {...currentOrder};
    newOrder[ingredient].includes(value) ? newOrder[ingredient] = newOrder[ingredient].filter(e => e !== value) : newOrder[ingredient].push(value);
    setCurrentOrder(newOrder);
    handleOrderLimited(ingredient);
  }

  const handleOrderLimited = (ingredient) => {
    const newLimit = {...orderLimited};
    if (currentOrder[ingredient].length === orderLimited[ingredient].amount) {
      newLimit[ingredient].limited = true;
    } else {
      newLimit[ingredient].limited = false;
    }
    setOrderLimited(newLimit);
    return newLimit[ingredient].limited;
  }

  const handleDisplay = (toHide, toShow) => {
    // Used to toggle the display of vegetables & sauces
    const canDisplay = {...orderDisplay};
    if (toHide) {
      if (toHide === "ALL") { 
        canDisplay.map(e => e = false); }
      else { canDisplay[toHide] = false }; 
    };
    if (toShow) { canDisplay[toShow] = true; };
    setOrderDisplay(canDisplay);
  }

  const handleOrderEnded = () => {
    // Used to push an order that has been completed to the orders array
    const current = {...currentOrder, price: 6.99};
    const all = [...allOrders];
    setAllOrders([...all, current]);
  }

    return (
      <div className="min-h-screen bg-yellow-25">
        <Navbar />
        {console.log(currentOrder)}
        
        {/* Choose Bread */}
        <div id="ChooseBread" className={
          `flex flex-col items-center justify-center my-5 ${orderDisplay.bread ? ' block' : ' hidden'}`
        }>

          <div className="my-3 text-3xl font-bold text-center text-red-1000">
            Choisissez le pain
            <div className="text-sm font-medium">
                Vous avez le choix entre différents pains pour un plaisir unique.
              </div>
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
              <div className="text-sm font-medium">
                Le choix peut-être difficile, mais vous ne serez pas déçu !
              </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-5 space-x-4 sm:flex-row">
              {defaultMeats.map((meat) => (
                <div key={meat.name} onClick={() => handleOnSelected('meat', meat.name, {hide:'meat', show:'vegetables'})}>
                  <IngredientBox name={meat.name} image={meat.image} />
                </div>
              ))}
            </div>
            <div className="my-10" onClick={() => handleDisplay('meat', 'bread')}><Button text={"Précédent"} /> </div>
          </div>

        {/* Choose Vegetables */}
        <div id="ChooseVegetables" className={
          `flex flex-col items-center justify-center my-5 ${orderDisplay.vegetables && !orderDisplay.meat ? ' block' : ' hidden'}`
        }>
            <div className="my-3 text-3xl font-bold text-center text-red-1000">
              Des crudités pour votre merveille ?
              <div className="text-sm font-medium">
                Vous pouvez en choisir jusqu'à 3. Ou rien. Vous décidez !
              </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-5 space-x-4 sm:flex-row">
              {defaultVegetables.map((veg) => (
                <div key={veg.name} onClick={() => handleOnAdded('vegetables', veg.name)}>
                  <IngredientBox
                    name={veg.name}
                    image={veg.image}
                    onSelected={currentOrder.vegetables.includes(veg.name) ? true : false}
                    isDisabled={!currentOrder.vegetables.includes(veg.name) && orderLimited.vegetables.limited ? true : false} />
                </div>
              ))}
            </div>
            <div className="flex flex-row my-10 space-x-5">
              <div onClick={() => handleDisplay('vegetables', 'meat')}><Button text={"Précédent"} /></div>
              <div onClick={() => handleDisplay('vegetables', 'sauces')}><Button text={"Suivant"} /></div>
            </div>
          </div>

        {/* Choose Sauces */}
        <div id="ChooseSauces" className={
          `flex flex-col items-center justify-center my-5 ${orderDisplay.sauces && !orderDisplay.vegetables ? ' block' : ' hidden'}`
        }>
            <div className="my-3 text-3xl font-bold text-center text-red-1000">
              Des sauces pour donner de la couleur à cette magie ?
              <div className="text-sm font-medium">
                Deux sauces maximum. Pas plus. Nous sommes là pour déguster la viande !
              </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-5 space-x-4 sm:flex-row">
              {defaultSauces.map((s) => (
                <div key={s.name} onClick={() => handleOnAdded('sauces', s.name)}>
                  <IngredientBox
                    name={s.name}
                    image={s.image}
                    onSelected={currentOrder.sauces.includes(s.name) ? true : false}
                    isDisabled={!currentOrder.sauces.includes(s.name) && orderLimited.sauces.limited ? true : false} />
                </div>
              ))}
            </div>
            <div className="flex flex-row my-10 space-x-5">
              <div onClick={() => handleDisplay('sauces', 'vegetables')}><Button text={"Précédent"} /></div>
            <div onClick={() => handleDisplay('sauces', 'summary')}><Button text={"Terminer"} /></div>
            </div>
        </div>

        {/* Order Summary */}
        <div id="OrderSummary" className={
          `flex flex-col items-center justify-center my-5 ${orderDisplay.summary && !orderDisplay.sauces ? ' block' : ' hidden'}`
        }>
            <div className="my-3 text-3xl font-bold text-center text-red-1000">
              On récapitule tout ça !
              <div className="text-sm font-medium">
                Pas de panique, vous pouvez toujours modifier votre choix en revenant en arrière.
              </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-5 space-x-4 sm:flex-row">
              <IngredientBox
                key={currentOrder.bread}
                name={currentOrder.bread}
                image={currentOrder.bread ? defaultBreads.find(e => e.name === currentOrder.bread).image : defaultBreads[0].image}
              />
              <IngredientBox
                key={currentOrder.meat}
                name={currentOrder.meat}
                image={currentOrder.meat ? defaultMeats.find(e => e.name === currentOrder.meat).image : defaultMeats[0].image}
              />
              {currentOrder.vegetables.map((v) => (
                <IngredientBox key={v} name={v} image={defaultVegetables.find(e => e.name === v).image} />
              ))}
              {currentOrder.sauces.map((s) => (
                  <IngredientBox key={s} name={s} image={defaultSauces.find(e => e.name === s).image} />
              ))}
            </div>
            <div className="flex flex-row my-10 space-x-5" onClick={() => handleOrderEnded()}>
              <Button text={"Commander"} />
            </div>
        </div>

      </div>
    );
};

export default App;
