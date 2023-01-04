import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './assets/styles/init.scss';
import ScrollReverse from 'utils/ScrollReverse';
import ContextWrapper from 'context';
import App from './App';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollReverse />
      <ContextWrapper>
        <App />
      </ContextWrapper>
    </BrowserRouter>
  </React.StrictMode>,
);
