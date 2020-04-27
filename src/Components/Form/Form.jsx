import React, { Component } from 'react';

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      disabled: true
    }
  }
  async setValue(value) {
    await this.setState({inputValue: value})
    this.toggleSubmit();
  }
  toggleSubmit() {
      this.state.inputValue.length > 0 ? this.setState({disabled: false}) : this.setState({disabled: true})
  }

  render() {
    return (
      <form className="user_input--container">
        <input onChange={e => this.setValue(e.target.value)} className="user_input" type="text"></input>
        <button disabled={this.state.disabled} className="submit_button">Submit</button>
      </form>
    );
  }
}