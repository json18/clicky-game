import React from "react";
import "./Image.css";

// import Dog-10 from '../../Imgs/Dog-10.jpg';
// import Dog-11 from '../../Imgs/Dog-11.jpg';
// import Dog-1 from '../../Imgs/Dog-1.jpeg';
// import Dog-2 from '../../Imgs/Dog-2.jpg';
// import Dog-3 from '../../Imgs/Dog-3.jpg'';
// import Dog-4 from '../../Imgs/Dog-4.jpg'';
// import Dog-5 from '../../Imgs/Dog-5.jpg'';
// import Dog-6 from '../../Imgs/Dog-6.jpeg'';
// import Dog-7 from '../../Imgs/Dog-7.jpg'';
// import Dog-8 from '../../Imgs/Dog-8.jpeg'';
// import Dog-9 from '../../Imgs/Dog-9.jpg'';
// import Dog-12 from '../../Imgs/Dog-12.jpg'';

const Image = props => (
    <div className="image">
      <div className="img-container">
        <img className="imageClass" alt="" src={props.image} />
      </div>
    </div>
  );

export default Image;

  