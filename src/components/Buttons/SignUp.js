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
  color: ${cream};
  font-size: 1em;
  font-weight: bold;
  margin: 1em;
  padding: 1em;
  border-radius: 5px;
`;

const SignUp = () => (  
  <ButtonContainer>
    <Button>Sign Me Up!</Button>
  </ButtonContainer>
);

export default SignUp;