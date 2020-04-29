import React, {Component} from "react";
import '../Response/Response.css'
import upArrow from "../../Images/up-arrow.svg";

export class Response extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: this.props.input,
      resuts: this.props.results
    }
  }
  render(){
    return (
      <>
        {this.state.input === 0 && (
          <p className="typewriter">
            Welcome to Chris Lane's Website.
          </p>
        )}
        {this.state.input === 1 && (
          <p className="typewriter">
            Ask me anything or use the nav bar up there{" "}
            <img className="up_arrow__svg" src={upArrow}></img> to get around.
          </p>
        )}
        {this.state.input === 2 && (
          <p className="typewriter">
            A list of commands is at the bottom left corner of the page.
          </p>
        )}
        {this.state.input >= 3 && !this.state.results && (
          <p className="typewriter">
            Just type your question out in the input below and click enter.
          </p>
        )}
      </>
    )}
}
