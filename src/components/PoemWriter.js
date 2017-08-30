import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  validator = () => {
    const lines = this.state.value.split('\n')
    let wordCounts = lines.map((line) => line.trim().split(' ').length ) // [5,3,5]
    let wordCountsValidator = wordCounts.toString() === [5,3,5].toString()
    if (!(lines.length === 3) || !(wordCountsValidator)){
      return (
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>
      )
    }
  }

  update = (event) => this.setState({value: event.target.value})

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.update}
        />
        {this.validator()}
      </div>
    );
  }
}

export default PoemWriter;
