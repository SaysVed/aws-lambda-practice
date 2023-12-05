import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Page1 from './Components/AaPages/Page1.js';
import Page2 from './Components/AaPages/Page2.js';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" Component={Page1} />
        <Route path="/form" Component={Page2} />
      </Routes>

    </>
  );
}

export default App;
