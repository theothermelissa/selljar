import React from "react";
import styled from "styled-components"

const Title = styled.h1`
  font-size: 150%;
  text-align: center;
  color: #233E58;
`;

const HeaderText = ({text}) => (  
  <Title>{text}</Title>  
);

export default HeaderText;