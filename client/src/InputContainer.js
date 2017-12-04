import React, { Component } from 'react';

class InputContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({input: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.translate(this.state.input)
  }

  render() {
    return (
      <article>
        <h1>Protein Translator</h1>
        <form>
          <label>
            Enter RNA sequence:
            <input type="text" value={this.state.input} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Translate" onClick={this.handleSubmit}/>
        </form>
      </article>
    );
  }
}

export default InputContainer;
