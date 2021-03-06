import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  update = (event) => this.setState({value: event.target.value})

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.update} />
        <p>{this.props.maxChars - this.state.value.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
