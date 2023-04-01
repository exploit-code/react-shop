import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserContext from './context/UserContext';

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContext>
      <Provider store={store}>
        <PersistGate loading={'loading'} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </UserContext>
  </React.StrictMode>
)

reportWebVitals();
