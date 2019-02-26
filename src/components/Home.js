import React from "react";
import HeaderText from "./HeaderText"
import BenefitsList from "./Benefits/BenefitsList"
import SubheaderText from "./SubheaderText"


const Home = () => (
  <div>
    <HeaderText text="Firehouse Barbecue Fundraisers" />
    <SubheaderText text="High-profit fundraisers -- hold the hassle."  />
    <div>
    <HeaderText props="this is my header text" />
    <BenefitsList />
    </div>
  </div>
  
);

export default Home;

