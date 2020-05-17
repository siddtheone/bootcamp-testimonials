import React, {useReducer} from 'react';
import Holder from './components/Holder';
import ImageFrame from './components/ImageFrame';
import Testimonial from './components/Testimonial';
import { createGlobalStyle } from 'styled-components';
import {Provider} from './store/store';
import {
  initialState,
  reducer,
} from './reducer';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  img {
    width: 100%;
  }
`;

function App() {
  const state = useReducer(reducer, initialState);

  return (
    <Provider value={state}>
      <Holder>
        <GlobalStyle />
        <ImageFrame />
        <Testimonial
          testimonial={'I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. '}
          name={'Sara'}
          designation={'Frontend developer'}
        />
      </Holder>
    </Provider>
  );
}

export default App;
