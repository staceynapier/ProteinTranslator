import React, { Component } from 'react';
import './App.css';
import InputContainer from './InputContainer.js';
import TranslationContainer from './TranslationContainer.js';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      splitString: [],
      library: [
        ['AUG', 'Methionine'],
        ['UUU', 'Phenylalanine'],
        ['UUC', 'Phenylalanine'],
        ['UUA', 'Leucine'],
        ['UUG', 'Leucine'],
        ['UCU', 'Serine'],
        ['UCG', 'Serine'],
        ['UCA', 'Serine'],
        ['UCC', 'Serine'],
        ['UAU', 'Tyrosine'],
        ['UAC', 'Tyrosine'],
        ['UGU', 'Cysteine'],
        ['UGC', 'Cysteine'],
        ['UGG', 'Tryptophan'],
        ['UAA', 'stop'],
        ['UGA', 'stop'],
        ['UAG', 'stop']
      ]
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
          <TranslationContainer splitString={this.state.splitString} library={this.state.library}/>
        </section>
      </main>
    );
  }
}

export default App;
