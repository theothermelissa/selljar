import React from "react";
import styled from "styled-components";
import { taupe } from "./colors"

const Subtitle = styled.h2`
  font-size: 90%;
  font-weight: bold;
  text-align: center;
  color: ${taupe};
  text-transform: uppercase;
`;


const SubheaderText = ({ text }) => (  
    <Subtitle>
      {text}
    </Subtitle>  
);

export default SubheaderText;