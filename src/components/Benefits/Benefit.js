import React from "react";
import styled from "styled-components"
import { cream, bonewhite, taupe } from "../colors"

const BenefitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-basis: 200px;
  height: 275px;
  padding: 50px 10px 30px 20px;
  margin: 8px;
  /* background: #F4FCFC; */
  background: ${bonewhite};
  border: 3px solid ${taupe};
  border-radius: 25px;
`;

// const NameContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const BenefitName = styled.h2`
  font-size: 130%;
  color: ${taupe};
`;

const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30%;
`;

const BenefitDescription = styled.span`
  color: ${taupe};
  font-size: 90%;
  /* font-weight: bold; */
`;

const Benefit = ({ icon, name, description }) => (  
  <BenefitContainer>
    { icon }
    {/* <NameContainer> */}
      <BenefitName>
        {name}
      </BenefitName>
    {/* </NameContainer> */}
    <DescriptionContainer>
      <BenefitDescription>
        {description}
      </BenefitDescription>
    </DescriptionContainer>
  </BenefitContainer> 
);




export default Benefit;