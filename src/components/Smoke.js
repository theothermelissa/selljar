import React from "react";
import styled, { keyframes } from "styled-components";
import smoke from "../images/smoke.png"
import { charcoal, mediumgray, taupe } from "./colors"

const SmokeBox = styled.div`
  /* display: block; */
  position: relative;
  margin: 0px;
  height: 360px;
  width: 100%;
  overflow: hidden;
  background: ${taupe};
  text-align: center;
`;

const spin1 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const spin2 = keyframes`
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
`;


const Image1 = styled.img`
  position: absolute;
  left: -100px;
  top: -420px;
  opacity: .7;
  width: auto;
  margin: 0px;
  height: 1200px;
  animation: ${spin2} 320s ease-in infinite;
  /* object-fit: cover; */
`;

const Image2 = styled.img`
  position: absolute;  
  left: 0px;
  top: -360px;
  opacity: .4;
  width: auto;
  margin: 0px;
  height: 2000px;
  /* object-fit: cover; */
  animation: ${spin2} 250s ease-out infinite;
`;

const Image3 = styled.img`
  position: absolute;
  opacity: .6;
  left: 100px;
  top: -250px;
  width: auto;
  margin: 0px;
  /* object-fit: cover; */
  height: 2400px;
  animation: ${spin1} 420s linear infinite;
`;


const Smoke = () => (  
  <SmokeBox>
    <Image1 src={smoke} alt="Smoke" />  
    <Image2 src={smoke} alt="Smoke" />  
    <Image3 src={smoke} alt="Smoke" />  
  </SmokeBox>
  );


export default Smoke;