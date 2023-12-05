import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacts from './components/Contacts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contacts/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
