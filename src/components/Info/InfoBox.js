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
      <InfoText text="Higher profits, lower stress. We're a dedicated fundraiser company selling steaming hot, freshly-smoked meats and complete meal kits. Our streamlined process makes running a Firehouse fundraiser easy on the organizer. Our great straightforward pricing keeps the organization’s profits high. And finally, we have a great-tasting, high-quality product their participants can feel good about selling. That's why for more than twenty years, organizations across the Southeast have turned to Firehouse for help with fundraising ideas."/>
    </InfoContainer>
);

export default InfoBox;