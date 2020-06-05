import React from 'react';
import styled from 'styled-components';
import Chart from './Chart';
import bear from '../images/bear.svg';
import home from '../images/home.svg';
import world from '../images/world.svg';

const tips = [
  'Be more specific.',
  'Better sobra than sorry.',
  'Honesty is the best policy... especially when planning your emergency fund.'
]

const Startover = styled.div`
  text-align: center;
  margin: 50px 0 100px;

  p {
    margin-top: 25px;
  }

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`

const Button = styled.a`
    padding: 15px;
    margin-bottom: 1em;
    text-align: center;
    border-radius: 5px;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    background-color: #cc0000;
    color: #fff;
    transition: all .3s;

    &:hover {
      filter: brightness(110%);
    }
`

const Comparison = styled.div`
  display: flex;
  flex-direction: column;
  // margin-top: 40px;

  @media (min-width: 768px) {
    padding: unset;
    flex-direction: row;
    margin-top: 0;
  }

  div {
    flex: 1;
  }

  h1,
  p {
    margin: 10px;
  }

  img {
    max-width: 170px;
    min-height: 170px;
  }

  ul.dashed {
    list-style-type: none;
    padding: 0;
  }

  ul.dashed > li {
    text-indent: -5px;
  }

  ul.dashed > li:before {
    content: "- ";
    text-indent: -5px;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  canvas {
    margin-top: 20px;
    max-width: 500px;
  }

  .title {
    margin-bottom: 1em;
  }
`

const Item = styled.div`
  margin: 20px 50px;

  @media (min-width: 768px) {
    margin: 0 50px;
  }
`

const Disclaimer = styled.div`
  position: fixed;
  bottom: 0;
  background-color: #fff;
  padding: 20px;
  font-size: .75em;

  p {
    color: #999;
    margin: 0;
    text-align: center;

    a {
      color: #999;
    }
  }

  .disclaimer-title {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 5px;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    font-size: .9em;
  }
`

const Currency = (money) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'PHP' } ).format(money);
}

const Result = ({data}) => (
  <Wrapper>
    <h1 className="title">Roughly, your emergency fund should be worth...</h1>
    {data.specific &&
    <Chart data={data} />
    }
    <Comparison>
      <Item>
        <img src={bear} alt=""/>
        <h1>Lite</h1>
        <p>Worth three months</p>
        <p>{Currency(data.monthlyExpense * 3)}</p>
      </Item>
      <Item>
        <img src={home} alt=""/>
        <h1>Hiatus</h1>
        <p>Worth six months</p>
        <p>{Currency(data.monthlyExpense * 6)}</p>
      </Item>
      <Item>
        <img src={world} alt=""/>
        <h1>Pandemic</h1>
        <p>Worth one year</p>
        <p>{Currency(data.monthlyExpense * 12)}</p>
      </Item>
    </Comparison>
    <Startover>
      <Button href="/">Start Over?</Button>
      <p>
        <small>
          {
            /*data.firstTime ?
            tips[0]
            :*/
            tips[Math.floor(Math.random() * tips.length)]
          }
        </small>
      </p>
    </Startover>
    <Disclaimer>
      <p>Disclaimer: None of the content here must be taken for legal financial advice. <a href="https://github.com/michaelignacio/ef-calc" target="_blank" rel="noopener noreferrer">Fork me</a></p>
    </Disclaimer>
  </Wrapper>
);

export default Result;