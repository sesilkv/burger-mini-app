import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import BurgerContext from './Context/BurgerContext';

import Home from './Pages/Home';
import BurgerMaker from './Pages/BurgerMaker';
import Layout from './Layouts/Layout'

function App() {
  // inisiasi state 'ingredients' & setter 'setIngredients'
  const [ingredients, setIngredients] = useState([])

  //handler untuk MENAMBAHKAN ingredient
  const addIngredientsHandler = (ingredient) => {
    //menjalankan setter 'setIngredients' dengan callback function
    setIngredients( prevState => {
      //duplikasi state 'ingredients' lama dan menambahkan ingredient baru pada index 0
      const newState = [ingredient,...prevState]
      //return data baru untuk state 'ingredients'
      return newState
    })
  }

  //handler untuk MENGURANGI ingredient
  const removeIngredientsHandler = (index) => {
    //menjalankan setter 'setIngredients' dengan callback function
    setIngredients( prevState => {
      //duplikasi state 'ingredients' lama
      const newState = [...prevState]
      //hapus ingredient pada state 'ingredients berdasarkan indexnya
      newState.splice(index,1)
      //return data baru untuk state 'ingredients'
      return newState
    })
  }

  //handler untuk menggeser ingredient KE ATAS 1 TINGKAT
  const moveUpIngredientsHandler = (index) => {
    //menjalankan setter 'setIngredients' dengan callback function
    setIngredients( prevState => {
      //duplikasi state 'ingredients' lama
      const newState = [...prevState]
      //duplikasi item pada index sebelum index ingredient yg akan digeser ke atas dan disimpan di variable 'temp'
      const temp = newState[index-1]
      //assign ingredient yg akan digeser ke index sebelum index saat ini
      newState[index-1] = newState[index]
      //assign variable 'temp' ke index saat ini
      newState[index] = temp
      //return state baru
      return newState
    })
  }

  //handler untuk menggeser ingredient KE BAWAH 1 TINGKAT
  const moveDownIngredientsHandler = (index) => {
    //menjalankan setter 'setIngredients' dengan callback function
    setIngredients( prevState => {
      //duplikasi state 'ingredients' lama
      const newState = [...prevState]
      //duplikasi item pada index sebelum index ingredients yg akan digeser ke bawah dan disimpan di variable 'temp'
      const temp = newState[index+1]
      //assign ingredient yg akan digeser ke index setelah index saat ini
      newState[index+1] = newState[index]
      //assign variable 'temp' ke index saat ini
      newState[index] = temp
      //return state baru
      return newState
    })
  }

  return (
    <BurgerContext.Provider value={{ingredients,setIngredients,addIngredientsHandler,removeIngredientsHandler,moveUpIngredientsHandler,moveDownIngredientsHandler}}>
      {/* Routes adalah VDOM yg berubah2 ketika URL diganti */}
      <Layout>
      <Routes>
        {/* {} berguna untuk memasukkan JS ke dalam JSX */}
        <Route path="/" element={<Home />} />
        <Route path="/burger-maker" element={<BurgerMaker/>} />
      </Routes>
      </Layout>
    </BurgerContext.Provider>
  );
}

export default App;
