import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Image from "./components/Image/Image"
import './App.css';
import images from "./images.json";


const App = () => (
  <div className="container">
    <Navbar/>
    <Jumbotron/>
    <Image
     image={images[0].image}
     /> 
  </div>
);

export default App;
