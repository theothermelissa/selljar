import React from "react";
import styled from "styled-components"
import { taupe } from "./colors";

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: ${taupe};
`;

const HeaderText = ({text}) => (  
  <Title>{text}</Title>  
);

export default HeaderText;