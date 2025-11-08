import React, {Component} from "react";

class SimpleClassComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "Hello, this is a simple class component!"
        };
    }

  render() {
    return(
        <div>
            <h1>Welcome to My App</h1>
            <p>{this.state.message}</p>
        </div>
    );
  }
}

export default SimpleClassComponent;
