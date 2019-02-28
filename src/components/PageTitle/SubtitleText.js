import React from "react";
import styled from "styled-components";
import { charcoal } from "../colors"

const Subtitle = styled.h2`
  font-size: 90%;
  font-weight: bold;
  text-align: center;
  color: ${charcoal};
  text-transform: uppercase;
  margin: 0px;
`;


const SubtitleText = ({ text }) => (  
    <Subtitle>
      {text}
    </Subtitle>
);

export default SubtitleText;