import React, { Component } from "react";

class Input extends Component {
  state = {
    textInput: ''
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.anuSubmit(this.state.textInput)
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search..."
            value={this.state.textInput}
            onChange={e => this.setState({ textInput: e.target.value })}
          />
          <i className="search icon"></i>
        </div>
      </form>
    );
  }
}

export default Input;
