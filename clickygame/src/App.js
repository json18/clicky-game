import React, {Component} from "react";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Image from "./components/Image/Image"
import './App.css';
import images from "./images.json";


class App extends Component {
  constructor () {
    super();
  }


state = {
  images
};

render () { 
  return (
  <div className="container">
    <Navbar/>
    <Jumbotron/>

  {this.state.images.map(image => (
    <Image
     image={images.image}
     key={images.id}
     onClick={() => {
        console.log("this is working")
     }}
     />
    ))};
    </div>
    //    <Image
    //  image={images[1].image}
    //  /> 
    //    <Image
    //  image={images[2].image}
    //  /> 
    //    <Image
    //  image={images[3].image}
    //  /> 
    //    <Image
    //  image={images[4].image}
    //  /> 
    //    <Image
    //  image={images[5].image}
    //  /> 
    //    <Image
    //  image={images[6].image}
    //  /> 
    //    <Image
    //  image={images[7].image}
    //  /> 
    //    <Image
    //  image={images[8].image}
    //  /> 
    //    <Image
    //  image={images[9].image}
    //  /> 
    //    <Image
    //  image={images[10].image}
    //  /> 
    //    <Image
    //  image={images[11].image}
    //  /> 

  )}
  
  }

export default App;


