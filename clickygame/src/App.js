import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Image from "./components/Image/Image"
import './App.css';


const App = () => (
  <div className="container">
    <Navbar/>
    <Jumbotron/>
    <Image/> 
  </div>
);

export default App;
