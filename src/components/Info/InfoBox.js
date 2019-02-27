import React from "react";
import styled from "styled-components"
import InfoTitle from "./InfoTitle"
import InfoText from "./InfoText"


const InfoContainer = styled.div`
display: flex;
flex-flow: row wrap;
width: 100%;
align-items: center;
justify-content: center;
margin: 0px;
/* flex-basis: 1; */
`;

const InfoBox = ({text, title}) => (  
  <InfoContainer>
      <InfoTitle title="a better fundraiser." />
      <InfoText text="For more than twenty years, organizations across the Southeast have turned to Firehouse for help with fundraising ideas. Our streamlined process makes the fundraiser easy on the organizer. Our great straightforward pricing keeps the organization’s profits high. And finally, we have a great-tasting, high-quality product their participants can feel good about selling. Our business is providing organizations with a simple, profitable fundraising system selling steaming hot, freshly-smoked meats and complete meal kits."/>
    </InfoContainer>
);

export default InfoBox;