import React, { Component } from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Skills />
        <Projects />
      </div>
    );
  }
}

export default App;
