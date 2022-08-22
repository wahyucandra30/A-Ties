import './App.css';
import React from 'react';
import "./styles/tailwind.css"
import { Outlet } from "react-router-dom"
function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
