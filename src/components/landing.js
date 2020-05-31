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

  input {
    padding: 15px;
    margin-bottom: 1em;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  input[type="submit"] {
    background-color: transparent;
    transition: all .3s;

    &:hover {
      background-color: #000;
      color: #fff;
      cursor: pointer;
    }
  }
`

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`

const Landing = (props) => (
  <Container>
    <Form onSubmit={props.handleSubmit}>
      <label for="amount">
        How much is your monthly expense?
      </label>
      <input
        id="amount"
        name="amount"
        type="number"
        value={props.state.value}
        onChange={props.handleChange}
        placeholder="Your monthly expense here..."
        required
        autoFocus
      />
      <input type="submit" value="Continue" />
    </Form>
  </Container>
);

export default Landing;