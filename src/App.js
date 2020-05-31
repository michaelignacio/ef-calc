import React, { Component } from 'react';
import Landing from './components/landing';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthlyExpense: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      monthlyExpense: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Landing
          handleSubmit={(e) => this.handleSubmit(e)}
          handleChange={(e) => this.handleChange(e)}
          state={this.state}
        />
      </div>
    );
  }
}

export default App