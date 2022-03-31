import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import BurgerMaker from './Pages/BurgerMaker';
import Layout from './Layouts/Layout'

function App() {
  return (
    <>
      {/* Routes adalah VDOM yg berubah2 ketika URL diganti */}
      <Layout>
      <Routes>
        {/* {} berguna untuk memasukkan JS ke dalam JSX */}
        <Route path="/" element={<Home />} />
        <Route path="/burger-maker" element={<BurgerMaker/>} />
      </Routes>
      </Layout>
    </>
  );
}

export default App;
