import React, { Component } from "react";
import ButtonCounter from "./ButtonCounter";
import Carousel from "./Carousel";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Carousel w/ Swiper.js</h1>
        <Carousel />
      </div>
    );
  }
}

export default App;
