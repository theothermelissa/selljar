import React from "react";
import { 
  Handshake, 
  MapMarkerAlt, 
  DollarSign 
} from 'styled-icons/fa-solid';
import Benefit from './Benefit';
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
  color: #233E58;
`
const StyledMapMarkerAlt = styled(MapMarkerAlt)`
  height: 100px;
  width: 100px;
  color: #233E58;
`
const StyledDollarSign = styled(DollarSign)`
  height: 100px;
  width: 100px;
  color: #233E58;
`



const BenefitsList = () => (  
  <BenefitsTray>
    <Benefit icon={<StyledHandshake />} name="Easy-Peasy" description="This is something to say." />
    <Benefit icon={<StyledMapMarkerAlt />} name="Shop Local" description="This is something else to say." />
    <Benefit icon={<StyledDollarSign />} name="High-Profit" description="This is something ELSE else to say." />
  </BenefitsTray>
);




export default BenefitsList;