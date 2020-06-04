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
      pocketMoney: 0,
      sumOfExpenses: 0,
      firstTime: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSpecificity = this.handleSpecificity.bind(this);
  }

  handleChange(event) {
    if (this.state.specific) {
      this.setState({[event.target.name]: event.target.value }, ()=>{
        this.setState({
          monthlyExpense: +this.state.food + +this.state.bills + +this.state.accommodation + +this.state.transpo + +this.state.pocketMoney
        })
      });
    } else {
      this.setState({
        monthlyExpense: event.target.value
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submitted: true
    });
  }

  handleSpecificity(event) {
    event.preventDefault();
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
            data={this.state}
          />
        }
      </Container>
    );
  }
}

export default App