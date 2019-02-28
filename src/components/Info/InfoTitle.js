import React from "react";
import styled from "styled-components"
import { charcoal, yellow } from "../colors";
import { Parallax } from "react-scroll-parallax";

const TitleContainer = styled.div`
  display: flex;
  /* flex: 1; */
  flex-flow: column wrap;
  min-width: 15vw; 
  max-width: 50vw;
  height: 150px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 20px;
  border-right: 2px solid ${yellow};
  `;

const Title = styled.h1`
  font-size: 2em;
  color: ${yellow};
  margin: 0px;
  text-align: right;
  `;

const InfoTitle = ({title}) => (  
  <Parallax
    offsetYMax={10}
    offsetYMin={-10}
    slowerScrollRate
    >
    <TitleContainer>
      <Parallax
        offsetYMax={40}
        offsetYMin={-40}
        slowerScrollRate
        >
        <Title>{title}</Title>
      </Parallax>
    </TitleContainer>
  </Parallax>

);

export default InfoTitle;

