import React from "react";
import styled from "styled-components"
import { charcoal, lightestgray } from "../colors";

const Info = styled.span`
  display: flex;
  flex: 2;
  min-width: 300px;
  max-width: 500px;
  /* text-align: left; */
  align-items: center;
  justify-content: center;
  line-height: 1.75em;
  color: ${charcoal};
  padding: 20px 10px 20px 10px;
`;

const InfoText = ({text}) => (  
  <Info>{text}</Info>
);

export default InfoText;