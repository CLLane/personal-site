import React, { Component } from 'react';

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: null,
    }
  }
  render() {
    return (
      <form className="user_input--container">
        <input className="user_input" type="text"></input>
        <button className="submit_button">Submit</button>
      </form>
    );
  }
}