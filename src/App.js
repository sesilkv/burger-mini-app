import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import BurgerMaker from './Pages/BurgerMaker';

function App() {
  return (
    <>
      {/* Routes adalah VDOM yg berubah2 ketika URL diganti */}
      <Routes>
        {/* {} berguna untuk memasukkan JS ke dalam JSX */}
        <Route path="/" element={<Home />} />
        <Route path="/burger-maker" element={<BurgerMaker/>} />
      </Routes>
    </>
  );
}

export default App;
