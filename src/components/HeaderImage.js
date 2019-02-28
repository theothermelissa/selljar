import React from "react";
import styled from "styled-components";
import { ParallaxBanner } from 'react-scroll-parallax';
import crewCropped from "../images/crewCropped.png";
// import horizontalFlame from "../images/horizontalFlame.png";
import firewood from "../images/firewood.png";

const Image = styled.img`
  width: 100%;
  margin: 0px;
  height: auto;
`;

const HeaderImage = () => (  
  // <ParallaxBanner
  //   layers={[
  //     {
  //       image: crewCropped,
  //       amount: 0.4,
  //       slowerScrollRate: false,
  //       expanded: true,
  //     },
  //   ]}
  //   style={{
  //     height: '500px',
  //   }}
  // >
  // </ParallaxBanner>
  <Image src={firewood} alt="Firewood" />
);

export default HeaderImage;