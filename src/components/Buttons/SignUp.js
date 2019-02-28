import React from "react";
import styled from "styled-components"
import { orange, bonewhite, cream } from "../colors";

const ButtonContainer = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background: ${orange};
  color: ${bonewhite};
  font-size: 1.5em;
  font-weight: bold;
  text-transform: uppercase;
  margin: 5vw;
  padding: .5em;
  /* border: 3px solid ${bonewhite} */
  border-radius: 7px;
`;

const SignUp = () => (  
  <ButtonContainer>
    <Button>Sign Me Up!</Button>
  </ButtonContainer>
);

export default SignUp;