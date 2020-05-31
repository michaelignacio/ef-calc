import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;

  label {
    font-size: 2em;
    margin-bottom: 1em;
  }

  .d-flex {
    display: flex;

    button {
      margin-left: 10px;
    }

    button,
    input[type="submit"] {
      width: 100%;
    }
  }

  button,
  input {
    padding: 15px;
    margin-bottom: 1em;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  button,
  input[type="submit"] {
    background-color: transparent;
    transition: all .3s;
    font-weight: 800;
    text-transform: uppercase;
    color: #000;
    border-color: #ddd;

    &:hover {
      background-color: #CC0000;
      color: #fff;
      cursor: pointer;
    }
  }

  .visually-hidden {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap; /* added line */
  }
`

const Landing = (props) => (
  <Form onSubmit={props.handleSubmit}>
    <label htmlFor="amount">
      How much are your monthly expenses?
    </label>
    {!props.state.specific &&
      <input
        id="amount"
        name="amount"
        type="number"
        value={props.state.monthlyExpense}
        onChange={props.handleChange}
        placeholder="Your total monthly expense here..."
        required
        autoFocus
      />
    }
    {props.state.specific &&
      <>
      <label className="visually-hidden" htmlFor="food">Food budget</label>
      <input required onChange={props.handleChange} type="number" id="food" name="food" placeholder="Your food budget here..." />
      <label className="visually-hidden" htmlFor="bills">Bills</label>
      <input required onChange={props.handleChange} type="number" id="bills" name="bills" placeholder="Your bills spending here..." />
      <label className="visually-hidden" htmlFor="accommodation">Accommodation budget</label>
      <input required onChange={props.handleChange} type="number" id="accommodation" name="accommodation" placeholder="Your accommodation budget here..." />
      <label className="visually-hidden" htmlFor="transpo">Transpo budget</label>
      <input required onChange={props.handleChange} type="number" id="transpo" name="transpo" placeholder="Your transpo budget here..." />
      <label className="visually-hidden" htmlFor="pocketMoney">Pocket money</label>
      <input required onChange={props.handleChange} type="number" id="pocketMoney" name="pocketMoney" placeholder="Your pocket money here..." />
      </>
    }
    <div className="d-flex">
      <input type="submit" value="Continue" />
      {!props.state.specific &&
        <button onClick={props.handleSpecificity}>
          Be More Specific
        </button>
      }
    </div>
  </Form>
);

export default Landing;