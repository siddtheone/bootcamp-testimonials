import  React, {useContext} from 'react';
import StyledImageFrame from './StyledImageFrame';
import Next from '../../images/icon-next.svg';
import Prev from '../../images/icon-prev.svg';
import styled from 'styled-components';
import globalStateContext from '../../store/store';
import {getSelected} from '../../reducer';

const Button = styled.button`
    border: none;
    padding: .5em 1em;
    transition: .5s;
    cursor: pointer;
    outline: none;
    background: white;
    &:first-child {
        border-top-left-radius: 100px;
        border-bottom-left-radius: 100px;
    }
    &:last-child {
        border-top-right-radius: 100px;
        border-bottom-right-radius: 100px;
    }
    &:hover {
        opacity: .7;
    }
`;

const ButtonContainer = styled.div`
    position: absolute;
    bottom: 1em;
    left: calc(50% - 52px);
    border-radius: 1000px;

    @media (orientation: landscape) {
        left: 3em;
    }
`;

const Img = styled.img`
    border-radius: 5px;
    box-shadow: 0px 5px 10px gray;
`;

export default function ImageFrame() {
    const [state, dispatch] = useContext(globalStateContext);
    const selected = getSelected(state);
    const next = () => dispatch({type: 'next'});
    const prev = () => dispatch({type: 'prev'});

    return (
        <StyledImageFrame>
            <Img src={selected.url} alt={selected.name}/>
            <ButtonContainer>
                <Button onClick={prev}><img src={Prev} alt="Prev"/></Button>
                <Button onClick={next}><img src={Next} alt="Next"/></Button>
            </ButtonContainer>
        </StyledImageFrame>
    );
}