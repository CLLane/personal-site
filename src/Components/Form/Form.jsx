import React, { Component } from 'react';
import '../Form/Form.css'
export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      disabled: true,
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
    let userRequests = this.searchUserString(userString)
    if (userRequests.length > 1) {
      this.props.setUserResults(userRequests)
    } else if(userRequests.length === 1) {
      this.props.setUserResults(userRequests)
    }
    
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
  return results;
  }



  render() {
    if (this.state.disabled) {
      return (
        <form className="user_input--container">
          <input
            onChange={e => this.setValue(e.target.value)}
            className="user_input"
            type="text"
          ></input>
          <input
            onClick={e => this.handleSubmit(e)}
            className="submit_button__true"
            value='Submit'
            type="button"
          ></input>
        </form>
      );
    } else {
      return (
       <form className="user_input--container">
         <input
           onChange={e => this.setValue(e.target.value)}
           className="user_input"
           type="text"
         ></input>
         <input
           onClick={e => this.handleSubmit(e)}
           className="submit_button"
           value='Submit'
           type="button"
         ></input>
       </form>)  
  }
  }
}