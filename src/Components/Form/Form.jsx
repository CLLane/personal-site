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

  handleSubmit (e) {
    e.preventDefault();
    let userString = this.configureInput();
    this.searchUserString(userString)
    
  }

  configureInput() {
    let cleanSpecial = this.state.inputValue.replace(/[^\w\s]/gi, "");
    let cleanNumber = cleanSpecial.replace(/[0-9]/g, "");
    return cleanNumber.toLowerCase();
  }

  searchUserString(string) {
    let spacesSplit = string.split(' ')
    let noSpaces = string.replace(' ', '')
    let categories = ["resume", "projects", "bio"];
    let results = [];

    spacesSplit.forEach(el => {
      if( el === 'resume' || el === 'projects' || el === 'bio') {
        results.push(el)
      }
    })

    categories.forEach(el => {
        if(noSpaces.includes(el) && !results.includes(el)) {
          results.push(el)
        }
    })
    console.log('results', results)
    console.log('noSpaces :>> ', noSpaces);
    console.log('spacesSplit', spacesSplit)
  }

  render() {
    return (
      <form className="user_input--container">
        <input onChange={e => this.setValue(e.target.value)} className="user_input" type="text"></input>
        <button onClick={e => this.handleSubmit(e) } disabled={this.state.disabled} className="submit_button">Submit</button>
      </form>
    );
  }
}