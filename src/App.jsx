import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Add from './pages/Add';
import Edit from './pages/Edit';

import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path='update/:id' element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
