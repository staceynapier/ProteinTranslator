import React, { Component } from 'react';

class InputContainer extends Component {

  handleSubmit() {
    
  }

  render() {
    return (
      <article>
        <h1>Protein Translator</h1>
        <form>
          <label>
            Enter RNA sequence:
            <input type="text" name="sequence" />
          </label>
          <input type="submit" value="Translate" onSubmit={this.handleSubmit}/>
        </form>
      </article>
    );
  }
}

export default InputContainer;
