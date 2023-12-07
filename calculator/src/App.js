import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Page1 from './Components/AaPages/Page1.js';
import Page2 from './Components/AaPages/Page2.js'; // Corrected import name
import FormPage from './Components/AaPages/FormPage.js';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/pay-emi" element={<Page2 />} />
      </Routes>
    </>
  );
}

export default App;
