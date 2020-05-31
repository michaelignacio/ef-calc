import React from 'react';
import styled from 'styled-components';
import bear from '../images/bear.svg';
import home from '../images/home.svg';
import world from '../images/world.svg';

const Comparison = styled.div`
  display: flex;

  div {
    flex: 1;
  }

  h1,
  p {
    margin: 10px;
  }

  img {
    max-height: 150px;
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

  .title {
    margin-bottom: 1em;
  }
`

const Item = styled.div`
  margin: 50px
`

const Disclaimer = styled.div`
  p {
    color: #999;
    font-size: .8em;
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
    <Disclaimer>
      <p>Disclaimer: This is an tl;dr/eli5 version of how much emergency fund one should have. None of the content here must be taken for legal financial advice.</p>
    </Disclaimer>
  </Wrapper>
);

export default Result;