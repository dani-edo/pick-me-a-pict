import React, { Component } from "react";
import unsplash from "../api/unsplash";
import { Header, Icon, Dimmer, Loader, Segment } from "semantic-ui-react";

import Input from "./Input";
// import ModalEmpty from './modalEmpty';

class ImageRenderer extends Component {
  state = {
    imageUrl: "../../assets/desk.jpeg",
    loading: false
  };
  request = async e => {
    this.setState({
      loading: true
    });
    try {
      const response = await unsplash.get("/search/photos", {
        params: {
          query: e
        }
      });
      this.setState({
        imageUrl: response.data.results[0].urls.regular,
        loading: false
      });
    } catch (error) {
      console.log(error);
      this.setState({
        loading: false
      });
    }
  };
  render() {
    const { loading } = this.state;
    return (
      <Segment>
        {loading && <Loading />}
        <div>
          <div className="absolute-center">
            <Header
              as="h2"
              icon
              className="display-block text-shadow-gray color-white"
            >
              <Icon name="settings" />
              Pick Me a Pict
              <Header.Subheader className="text-shadow-gray color-white">
                Type whatever you want!
              </Header.Subheader>
            </Header>
            <Input anuSubmit={this.request} />
          </div>
          {/* {console.log(this.state.imageUrl === undefined )} */}
          {this.state.imageUrl && (
            <img className="bg-big" src={this.state.imageUrl} alt="bg-big" />
          )}
          {/* <ModalEmpty /> */}
        </div>
      </Segment>
    );
  }
}

const Loading = () => (
  <Dimmer active>
    <Loader />
  </Dimmer>
);

export default ImageRenderer;
