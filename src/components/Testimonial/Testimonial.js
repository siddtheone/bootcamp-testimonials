import React, {useContext} from 'react';
import styled from 'styled-components';
import StyledTestimonial from './StyledTestimonial';
import globalStateContext from '../../store/store';
import {getSelected} from '../../reducer'

const TestimonialContainer = styled.div`
    text-align: center;
    @media (orientation: landscape) {
        margin-right: -5em;
        text-align: left;
    }
`;

const UserContainer = styled.div`
    @media (orientation: landscape) {
        display: flex;
    }
`;

const Quote = styled.p`
    &:before {
        content: '\\201C';
    }

    &:after {
        content: '\\201D';
    }
`;

const Name = styled.div`
    font-weight: bold;
    @media (orientation: landscape) {
        margin-right: 1em;
    }
`;

const Designation = styled.div`
    color: hsl(240, 18%, 77%);
`;

export default function Testimonial() {
    const [state, dispatch] = useContext(globalStateContext);
    const {testimonial, name, designation} = getSelected(state);

    return (
        <StyledTestimonial>
            <TestimonialContainer>
                <Quote>{testimonial}</Quote>
                <UserContainer>
                    <Name>{name}</Name>
                    <Designation>{designation}</Designation>
                </UserContainer>
            </TestimonialContainer>
        </StyledTestimonial>
    )
}