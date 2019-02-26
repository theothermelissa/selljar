import React from "react";

const OwnerLetter = ({ content, speaker, title }) => (  
    
    <blockquote>{content}
    <br>
    <cite>{speaker}
    <br>
    {title}</cite>
    </blockquote>  
);

export default OwnerLetter;