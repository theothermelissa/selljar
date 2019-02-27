import React from "react";
import HeaderText from "./HeaderText";
import BenefitsList from "./Benefits/BenefitsList";
import SubheaderText from "./SubheaderText";
import SectionBreak from "./SectionBreak";
import { ParallaxProvider } from 'react-scroll-parallax';
import HeaderImage from "./HeaderImage";
import StepsList from "./Steps/StepsList";
import QuotesList from "./Quotes/QuotesList";
import SectionImage from "./SectionImage";
import InfoBox from "./Info/InfoBox";
import SignUp from "./Buttons/SignUp";

const Home = () => (
  <ParallaxProvider>
    <div>
      <HeaderText text="Firehouse Barbecue Fundraisers" />
      <HeaderImage />
      <SubheaderText text="High-profit fundraisers -- hold the hassle." />
      <SectionBreak />
      {/* <SubheaderText text="We offer:" />
      <HeaderText text="Better Fundraisers" />
      <SectionBreak /> */}
      <InfoBox />
      <SectionBreak />
      <HeaderText text="Why Firehouse?" />
      <SectionBreak />
      <BenefitsList />
      <SectionBreak />
      <SignUp />
      <SectionBreak />
      <SectionImage />
      <SectionBreak />
      <HeaderText text="How it works:" />
      <SectionBreak />
      <StepsList />
      <SectionBreak />
      <HeaderText text="What's everyone saying?" />
      <SectionBreak />
      <QuotesList />
      <SectionBreak />
      <HeaderText text="Call (256) 555-7575" />
      <SubheaderText text="to get your fundraiser started" />
      <SectionBreak />
      
    </div>
  </ParallaxProvider>
  
);

export default Home;

