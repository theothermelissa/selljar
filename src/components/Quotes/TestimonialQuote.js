import React from "react";

const TestimonialQuote = ({ content, speaker, title }) => (  
    
    <blockquote>{content}
    <br>
    <cite>{speaker}, {title}</cite>
    </blockquote>  
);

export default TestimonialQuote;