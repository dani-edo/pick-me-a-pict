import React, { Component } from "react";
import unsplash from "../api/unsplash";

import Input from "./Input";
// import ModalEmpty from './modalEmpty';

class ImageRenderer extends Component {
  state = {
    imageUrl: "../../assets/desk.jpeg"
  };
  masukGan = async e => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: e
      }
    });
    this.setState({
        imageUrl: response.data.results[0].urls.regular
    })
  };
  render() {
    return (
      <div>
        <Input anuSubmit={this.masukGan} />
        {console.log(this.state.imageUrl)}
        <img className="bg-big" src={this.state.imageUrl} alt="bg-big" />
        {/* <ModalEmpty /> */}
      </div>
    );
  }
}

export default ImageRenderer;
