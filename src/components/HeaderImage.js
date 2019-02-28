import React from "react";
import styled from "styled-components";
import { ParallaxBanner } from 'react-scroll-parallax';
import crewCropped from "../images/crewCropped.png";
import horizontalFlame from "../images/horizontalFlame.png";
import firewood from "../images/firewood.png";

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  /* height: auto; */
  background-image: url(${firewood});
  background-size: cover;
  align-items: center;
  justify-content: center;
`;

// const Image = styled.img`
//   width: 100%;
//   margin: 0px;
//   height: auto;
// `;

const Logo = styled.img`
  width: 300px;
  height: auto;
  margin: 0px;
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
  <HeaderContainer>
    <Logo src={horizontalFlame} alt="Logo" />
    {/* <Image src={firewood} alt="Firewood" />  */}
  </HeaderContainer>
);

export default HeaderImage;