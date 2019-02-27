import React from "react";
import Step from './Step';
import styled from 'styled-components';

const StepBox = styled.section`
display: flex;
flex-flow: column wrap;
width: 90vw;
align-items: center;
justify-content: center;
`;


const StepsList = () => (  
  <StepBox>
    <Step number="1" name="Set up your fundraiser" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
    <Step number="2" name="Sell some meats!" description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
    <Step number="3" name="Confirm order & delivery info" description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
    <Step number="4" name="We deliver!" description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." />
  </StepBox>
);




export default StepsList;