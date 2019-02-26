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
  background: #233E58;
  border-color: #233E58;
  border-radius: 25px;
`;

const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BenefitName = styled.h2`
  font-size: 130%;
  color: #F4FCFC;
`;

const BenefitDescription = styled.text`
  color: #F4FCFC;
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