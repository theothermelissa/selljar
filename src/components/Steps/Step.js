import React from "react";


const Step = ({ number, name, description }) => (  
  <div class="step-container">
    <div class="step-number">{number}</div>
    <div class="step-content">
    <div class="step-name">{name}</div>
    <div class="step-description">{description}</div>
    </div>
  </div>
);




export default Step;