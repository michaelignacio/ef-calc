import React, { Component } from 'react';
import Landing from './components/Landing';
import Result from './components/Result';
import Container from './components/Container';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthlyExpense: 10000,
      submitted: false,
      specific: false,
      food: 0,
      bills: 0,
      accommodation: 0,
      transpo: 0,
      pocketMoney: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSpecificity = this.handleSpecificity.bind(this);
  }

  handleChange(event) {
    this.setState({
      monthlyExpense: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submitted: true
    });
  }

  handleSpecificity(event) {
    event.preventDefault();
    console.log('test');
    this.setState({
      specific: true
    });
  }

  render() {
    return (
      <Container>
        {!this.state.submitted ?
          <Landing
            handleSubmit={(e) => this.handleSubmit(e)}
            handleChange={(e) => this.handleChange(e)}
            handleSpecificity={(e) => this.handleSpecificity(e)}
            state={this.state}
          />
          :
          <Result
            amount={this.state.monthlyExpense}
          />
        }
      </Container>
    );
  }
}

export default App