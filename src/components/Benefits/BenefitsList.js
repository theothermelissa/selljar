import React from "react";
import { 
  Handshake, 
  MapMarkerAlt, 
  DollarSign 
} from 'styled-icons/fa-solid';
import Benefit from './Benefit';
import { lightestgray, cream, bonewhite, yellow } from "../colors";
import styled from 'styled-components';


const BenefitsTray = styled.section`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const StyledHandshake = styled(Handshake)`
  height: 100px;
  width: 100px;
  color: ${cream};
`
const StyledMapMarkerAlt = styled(MapMarkerAlt)`
  height: 100px;
  width: 100px;
  color: ${cream};
`
const StyledDollarSign = styled(DollarSign)`
  height: 100px;
  width: 100px;
  color: ${cream};
`



const BenefitsList = () => (  
  <BenefitsTray>
    <Benefit icon={<StyledHandshake />} name="Easy-Peasy" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
    <Benefit icon={<StyledMapMarkerAlt />} name="Shop Local" description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
    <Benefit icon={<StyledDollarSign />} name="High-Profit" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
  </BenefitsTray>
);




export default BenefitsList;