import React, {Component} from "react";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Image from "./components/Image/Image"
import './App.css';
import images from "./images.json";


class App extends Component {
  constructor () {
    super()
  }

state = {
  images,
  imageClicked: [],
  score: 0
};


imageClick = event => {
  const currentImage = event.target.alt;
  const clickedImage = this.state.imageClicked.indexOf(currentImage)> -1;

  if (clickedImage) {
    this.setState({
      dog: this.state.image.sort(function(a,b) {
        return 1- Math.random();
    }),
    imageClick: [],
    score: 0
  });
    alert: ("You lost");
    console.log("This EVENT WORKS");
} else {
  this.setState({
    dog: this.state.image.sort(function(a,b) {
      return 1-Math.random();
  }),
  imageClick: this.state.imageClicked.concat(currentImage),
  score: this.state.score + 1
},
 
  () => {
    if (this.state.score === 12) {
      alert ("You won");
      this.setState({
        dog: this.state.imageClicked.sort(function() {
          return 1- Math.random();
        }),
        imageClicked:[],
        score: 0
      });
    }
  }
);
}
};




render () { 
  return (
  <div className="container">
    <Navbar/>
    <Jumbotron/>

  {this.state.images.map(image => (
    <Image
     key={image.id}
     image={image.image}
    
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


