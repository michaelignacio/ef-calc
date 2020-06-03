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
  margin: 50px 0 20px;

  p {
    margin-top: 25px;
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

  @media (min-width: 768px) {
    flex-direction: row;
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
  margin: 0 50px;
`

const Disclaimer = styled.div`
  position: fixed;
  bottom: 0;
  padding-bottom: 20px;
  background-color: #fff;
  padding-top: 20px;

  p {
    color: #999;
    font-size: .9em;
    margin: 0;
    text-align: center;
  }

  .disclaimer-title {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 5px;
    text-transform: uppercase;
  }
`

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
        <p>{data.monthlyExpense * 3}</p>
      </Item>
      <Item>
        <img src={home} alt=""/>
        <h1>Hiatus</h1>
        <p>Worth six months</p>
        <p>{data.monthlyExpense * 6}</p>
      </Item>
      <Item>
        <img src={world} alt=""/>
        <h1>Pandemic</h1>
        <p>Worth one year</p>
        <p>{data.monthlyExpense * 12}</p>
      </Item>
    </Comparison>
    <Startover>
      <Button href="/">Start Over?</Button>
      <p>
        <small>
          {tips[Math.floor(Math.random() * tips.length)]}
        </small>
      </p>
    </Startover>
    <Disclaimer>
      <p>Disclaimer: This is an tl;dr/eli5 version of how much emergency fund one should have. None of the content here must be taken for legal financial advice.</p>
    </Disclaimer>
  </Wrapper>
);

export default Result;