import React from "react";
import styled from "styled-components"
import trailer from "../images/trailer.jpg"
import { ParallaxBanner } from 'react-scroll-parallax'

// const Image = styled.img`
//   width: 100%;
//   margin: 0px;
//   height: auto;
// `;

const SectionImage = () => (  
  <ParallaxBanner
  layers={[
    {
      image: trailer,
      amount: 0.4,
      slowerScrollRate: false,
      expanded: true,
    }
  ]}
  style={{
    height: '300px',
  }}
  >
  </ParallaxBanner>
  // <Image src={trailer} alt="The Crew" />  
);


export default SectionImage;