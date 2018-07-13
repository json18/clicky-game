import React from "react";
import "./Image.css";

class Image extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div>
                <div className="image">
                    <div className="img-container">
                        <img className="imageClass" alt="" src={this.props.image} onClick={this.props.onClick} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Image;

