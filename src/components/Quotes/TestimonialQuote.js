import React from "react";
import styled from "styled-components";
import { bonewhite, cream, orange, yellow, charcoal, lightestgray, mediumgray, taupe } from "../colors"

const QuoteBlock = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: stretch; 
  max-width: 20vw;
  margin: 20px;
  padding: 15px;
  border-radius: 25px;
`;

const QuoteText = styled.span`
  text-align: left;
  color: ${taupe};
  `;

const Signed = styled.span`
  font-size: 2em;
  margin: 10px 10px 0px 10px;
  font-family: Bradley Hand, cursive;
  color: ${taupe}
  text-align: right;
`;

const Location = styled.span`
  font-size: 1em;
  color: ${taupe};
  font-weight: lighter;
  text-align: right;
`;

const TestimonialQuote = ({ content, speaker, location }) => (  
  <QuoteBlock>
    <QuoteText>{content}</QuoteText>
    <Signed>--{speaker}</Signed>
    <Location>{location}</Location>
  </QuoteBlock>
);

export default TestimonialQuote;