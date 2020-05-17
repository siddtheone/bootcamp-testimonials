import styled from 'styled-components';
import patternCurve from '../../images/pattern-curve.svg';


const Holder = styled.main`
    background-image: url(${patternCurve});
    background-position: bottom left;
    background-repeat: no-repeat;
    background-size: 50%;
    font-family: 'Inter', sans-serif;
    font-size: 1.25rem;
    padding: 1em;
    color: hsl(240, 38%, 20%);

    @media (orientation: landscape) {
        display: flex;
        height: 100vh;
        align-items: center;
        flex-direction: row-reverse;
        padding: 1em 3em;
        width: min(100%, 1200px);
        margin: 0 auto;
    }
`;

export default Holder;