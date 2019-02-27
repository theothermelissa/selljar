import React from "react";
import styled from "styled-components";
import { orange, yellow, mediumgray, taupe } from "../colors";

const StepContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  /* height: 10vw; */
  align-items: start;
  justify-content: start;
`;


const StepTextContainer = styled.div`
  display; flex;
  flex-flow: column;
  /* height: auto; */
  flex: 1;
  width: 40vw;
  align-items: end;
  justify-content: end;
  margin: 10px 0px 50px 10px;
  padding: 0px 0px 0px 8px;
  border-left: 2px solid ${yellow};
  `;

const StepNumber = styled.h1`
  font-size: 3em;
  color: ${yellow};
  margin: 0;
`;

const StepName = styled.h2`
  font-size: 1.25em;
  color: ${yellow};
  margin: 0;
`;

const StepDescription = styled.span`
  color: ${taupe};
  margin: 0;
`;


const Step = ({ number, name, description }) => (  
  <StepContainer>
    <StepNumber>{number}</StepNumber>
    <StepTextContainer>
    <StepName>{name}</StepName>
    <StepDescription>{description}</StepDescription>
    </StepTextContainer>
  </StepContainer>
);




export default Step;