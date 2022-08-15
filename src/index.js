import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import RouteApp from './routes';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { globalStore, persistedStore } from "./store"
import { PersistGate } from "redux-persist/integration/react"


const root = createRoot(document.getElementById("root"))
root.render
  (
    <Provider store={globalStore}>
      <PersistGate persistor={persistedStore}>
        <RouteApp />
      </PersistGate>
    </Provider>
  )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
