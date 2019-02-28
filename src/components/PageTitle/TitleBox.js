import React from "react";
import TitleText from './TitleText';
import SubtitleText from './SubtitleText';
// import { taupe, cream, bonewhite, yellow } from "../colors";
import styled from 'styled-components';
import Smoke from '../Smoke'


const TitleContainer = styled.section`
  position: relative;
  width: 100%;
  height: 360px;
  text-align: center;
  /* transform: translate 50%; */
`;

const TextBox = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;



const TitleBox = () => (  
  <TitleContainer>
    <Smoke />
    <TextBox>
      <TitleText text="Firehouse Barbecue Fundraisers" />
      <SubtitleText text="High-profit fundraisers -- hold the hassle." />
    </TextBox>
  </TitleContainer>
);




export default TitleBox;