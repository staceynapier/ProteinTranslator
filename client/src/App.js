import React, { Component } from 'react';
import './App.css';
import InputContainer from './InputContainer.js';
import TranslationContainer from './TranslationContainer.js';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      splitString: []
    }
    this.splitInput = this.splitInput.bind(this);
  }

  splitInput(input) {
    const splitString = input.match(/.{1,3}/g);
    this.setState({splitString: splitString});
  }

  render() {
    return (
      <main>
        <section>
          <InputContainer splitInput={this.splitInput}/>
        </section>

        <section>
          <TranslationContainer />
        </section>
      </main>
    );
  }
}

export default App;
