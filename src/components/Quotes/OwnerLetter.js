import React from "react";
import styled from "styled-components";
import { bonewhite, cream, orange, yellow, charcoal, lightestgray, mediumgray, taupe } from "../colors";
import { Parallax } from 'react-scroll-parallax';

const LetterBlock = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: end; */
  max-width: 200px;
  height: 100%;
  padding: 15px 30px 15px 30px;
  background: ${yellow};
  /* border: 2px solid ${mediumgray}; */
  border-radius: 25px;
`;

const LetterText = styled.span`
  text-align: left;
  font-size: 1.25em;
  color: ${mediumgray};
  line-height: 1.75em;
  `;

const Signature = styled.span`
  font-size: 2em;
  margin: 20px 0px 0px 0px;
  font-family: Bradley Hand, cursive;
  color: ${mediumgray}
  text-align: right;
`;

const Titled = styled.span`
  font-size: 1em;
  color: ${mediumgray};
  font-weight: lighter;
  text-align: right;
`;

const OwnerLetter = ({ content, speaker, title }) => (  
  <Parallax
    offsetYMax={15}
    offsetYMin={-15}
    slowerScrollRate
    >
    <LetterBlock>
      <LetterText>{content}</LetterText>
      <Signature>--{speaker},</Signature>
      <Titled>{title}</Titled>
    </LetterBlock>
  </Parallax>
);

export default OwnerLetter;