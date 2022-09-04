import React, { Component } from "react";
import ValidationSample from "./ValidationSample/ValidationSample";
import ScrollBox from './ScrollBox/ScrollBox';

class App extends Component {
  render() {
    return (
        // <ValidationSample/>
        <div>
          <ScrollBox ref={(ref) => this.scrollBox=ref}/>
          <button onClick={() => this.scrollBox.scrollToBottom()}>
              맨 밑으로
          </button>
        </div>
    );
  }
}

export default App;