import React, {useReducer, useEffect} from 'react';
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
  const handler = e => {
    e.preventDefault();
    if(e.keyCode === 37 || e.keyCode === 39) {
      state[1]({
        type: e.keyCode === 39 ? 'next' : 'prev'
      })
    }
  }

  useEffect(() => {
    document.addEventListener('keyup', handler);
    return () => document.removeEventListener('keyup', handler);
  })

  return (
    <Provider value={state}>
      <Holder>
        <GlobalStyle />
        <ImageFrame />
        <Testimonial />
      </Holder>
    </Provider>
  );
}

export default App;
