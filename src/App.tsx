import React from 'react';
import Blessings from './pages/blessings/blessings';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"; // Import only for this page
const App = () => {
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Blessings />} />
      </Routes>
    </div>
  )
}

export default App;
