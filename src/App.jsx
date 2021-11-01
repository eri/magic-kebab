import * as React from "react";
import "./index.css";

// Components
// import { Loading } from "./components/Loading";
import { Navbar } from "./components/Navbar";

// Views
import { ChooseBread } from "./views/ChooseBread";
import { ChooseMeat } from "./views/ChooseMeat";
import { ChooseVegetables } from "./views/ChooseVegetables";
import { ChooseSauces } from "./views/ChooseSauces";

import { defaultOrder } from "./data";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentOrder: defaultOrder,
      isLoading: true,
      timerHandle: null,
    };
  }

  componentDidMount() {
    this.timerHandle = setTimeout(
      () => this.setState({ isLoading: false }),
      2500
    );
  }

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = null;
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        // <Loading />
        <div>its loading</div>
      );
    }

    return (
      <div className="min-h-screen bg-yellow-25">
        <Navbar />
        <ChooseBread order={this.state} />
        {/* <ChooseMeat order={this.state} /> */}
        {/* <ChooseVegetables order={this.state} /> */}
        {/* <ChooseSauces order={this.state} /> */}
      </div>
    );
  }
}

export default App;
