import styled from 'styled-components';
import patternBG from '../../images/pattern-bg.svg';

const StyledImageFrame = styled.div`
    background-image: url(${patternBG});
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    margin: 0 auto;
    padding: 2em;
    background-size: contain;
    margin-bottom: 1.5em;
    position: relative;

    @media (orientation: landscape) {
        flex-basis: 50%;
    }
`;

export default StyledImageFrame;