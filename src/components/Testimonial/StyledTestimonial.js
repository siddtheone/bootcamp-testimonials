import styled from 'styled-components';
import quoteImg from '../../images/pattern-quotes.svg';

const StyledTestimonial = styled.section`
    padding: 1em 0;
    background-image: url(${quoteImg});
    background-position-x: center;
    background-repeat: no-repeat;
    z-index: 1;
    
    @media (orientation: landscape) {
        background-position-x: 1em;
        flex-basis: 50%;
    }
`;

export default StyledTestimonial;