import React from "react";
import styled from "styled-components"
import { charcoal } from "../colors";

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: ${charcoal};
  margin: 10px;
`;

const TitleText = ({text}) => (  
  <Title>{text}</Title>  
);

export default TitleText;