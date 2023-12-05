import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Page1 from './Components/AaPages/Page1.js';

function App() {
  return (
    <>

      <Routes>
        <Route path="/page1" Component={Page1} />
      </Routes>

    </>
  );
}

export default App;
