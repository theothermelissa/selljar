import React from "react";
import styled from "styled-components"

const BenefitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 10em;
  height: 275px;
  padding: 50px 10px 10px 10px;
  margin: 10px;
  background: white;
  border: 4px solid #233E58;
  border-radius: 25px;
`;

const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BenefitName = styled.h2`
  font-size: 130%;
  color: #233E58;
`;

const BenefitDescription = styled.text`
  color: #233E58;
  font-size: 75%;
`;

const Benefit = ({ icon, name, description }) => (  
  <BenefitContainer>
    { icon }
    <NameContainer>
      <BenefitName>
        {name}
      </BenefitName>
    </NameContainer>
    <BenefitDescription>
      {description}
    </BenefitDescription>
  </BenefitContainer> 
);




export default Benefit;