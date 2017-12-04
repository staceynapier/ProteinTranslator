import React, { Component } from 'react';
import './App.css';
import InputContainer from './InputContainer.js';
import TranslationContainer from './TranslationContainer.js';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      translation: ''
    }
  }

  render() {
    return (
      <main>
        <section>
          <InputContainer translate={this.translate}/>
        </section>

        <section>
          <TranslationContainer />
        </section>
      </main>
    );
  }
}

export default App;
