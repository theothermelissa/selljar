import React from "react";
// import styled from "styled-components";
import { ParallaxBanner } from 'react-scroll-parallax';
import crew from "../images/crew.jpg";
// import horizontalFlame from "../images/horizontalFlame.png";

// const Image = styled.img`
//   width: 100%;
//   margin: 0px;
//   height: auto;
// `;

const HeaderImage = () => (  
  <ParallaxBanner
    layers={[
      {
        image: crew,
        amount: 0.4,
        slowerScrollRate: false,
        expanded: true,
      },
    ]}
    style={{
      height: '500px',
    }}
  >
  </ParallaxBanner>
);

export default HeaderImage;