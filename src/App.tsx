import React, { Component } from "react";
import { ClientQuery } from "./components/ClientQuery";
import { DirectWrite } from "./components/DirectWrite";
import { Mutations } from "./components/Mutations";

class App extends Component {
  render() {
    return (
      <div>
        <DirectWrite />
        <Mutations />
        <ClientQuery />
      </div>
    );
  }
}

export default App;
