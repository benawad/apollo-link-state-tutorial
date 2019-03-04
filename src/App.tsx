import React, { Component } from "react";
import { DirectQuery } from "./components/DirectQuery";
import { DirectWrite } from "./components/DirectWrite";
import { Mutations } from "./components/Mutations";
import { Queries } from "./components/Queries";
import { Todos } from "./components/Todos";
import { Variables } from "./components/Variables";

class App extends Component {
  render() {
    return (
      <div>
        <DirectWrite />
        <Mutations />
        <DirectQuery />
        <Queries />
        <Variables />
        <Todos />
      </div>
    );
  }
}

export default App;
