import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css';
import Consultar from './pages/Diario/Consultar';
import Inserir from './pages/Diario/Inserir';
import Diario from './pages/Diario';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <BrowserRouter>
      <Routes> 
      <Route path='' element={<Diario />} />
        <Route path='/diario' element={<Diario />} />
        <Route path='/diario/inserir' element={<Inserir />} />
        <Route path='/diario/inserir/:id' element={<Inserir/>} />
        <Route path='/diario/consultar' element={<Consultar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
