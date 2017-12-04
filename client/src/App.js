import React, { Component } from 'react';
import './App.css';
import InputContainer from './InputContainer.js';
import TranslationContainer from './TranslationContainer.js';

class App extends Component {
  render() {
    return (
      <main>
        <section>
          <InputContainer />
        </section>

        <section>
          <TranslationContainer />
        </section>
      </main>
    );
  }
}

export default App;
