export const initialState = {
    testimonials: [{
        testimonial: 'I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.',
        name: 'Tanya Sinclair',
        designation: 'UX Engineer',
        url: './images/image-tanya.jpg',
    }, {
        testimonial: 'If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.',
        name: 'John Tarkpor',
        designation: 'Junior Front-end Developer',
        url: './images/image-john.jpg',
    }],
    selectedIndex: 0
}

export function reducer(state = initialState, {type}) {
    switch (type) {
        case 'next':
            return {
                ...state,
                selectedIndex: state.selectedIndex === state.testimonials.length - 1 ? 0 : state.selectedIndex + 1
            };
        case 'prev':
            return {
                ...state,
                selectedIndex: state.selectedIndex === 0 ? state.testimonials.length - 1 : state.selectedIndex - 1
            };
        default:
            return state;
    }
}

export const getSelected = ({testimonials, selectedIndex}) => testimonials[selectedIndex];