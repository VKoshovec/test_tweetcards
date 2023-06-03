import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Suspense } from "react";
import Loader from './components/Loader/Loader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter basename="/test_tweetcards">
         <Suspense fallback={ <Loader/> }>
           <App />
         </Suspense>
       </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);