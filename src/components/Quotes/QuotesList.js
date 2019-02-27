import React from "react";
import TestimonialQuote from './TestimonialQuote';
import OwnerLetter from './OwnerLetter';
import styled from 'styled-components';


const QuotesContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  /* width: 100%; */
  align-items: flex-start;
  justify-content: center;
`;

const TestimonialsBox = styled.section`
  display: flex;
  flex-flow: column;
  /* flex: 1; */
  /* width: 100%; */
  align-items: center;
  justify-content: center;
`;


const QuotesList = () => (  
  <QuotesContainer>
    <TestimonialsBox>
      <TestimonialQuote content="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus." speaker="Eileen T." location="Comeon, FL"></TestimonialQuote>
      <TestimonialQuote content="Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." speaker="Jeremiah B." location="Mightyfine, LA"></TestimonialQuote>
      <TestimonialQuote content="Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." speaker="Flat T." location="Toejam, AL"></TestimonialQuote>
    </TestimonialsBox>
    <OwnerLetter content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga." speaker="Jamey" title="Owner"/>
  </QuotesContainer>
);




export default QuotesList;