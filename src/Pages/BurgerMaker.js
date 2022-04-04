import React from 'react';
import Burger from '../Components/Burger/Burger';
import style from './burgerMaker.module.css'
import Controller from '../Components/Burger/Controller'

const BurgerMaker = () => {
  // const [ingredients, setIngredients] = useState([])
  
  // const addIngredientsHandler = (ingredient) => {
  //   setIngredients(prevState => {
  //     const newState = [ingredient,...prevState]
  //     return newState
  //   })
  // }

  //render DOM
  return (
    <div className={style.burgermaker_container}>
      <div className={style.controller}>
        {/* controller component dengan props state 'ingredients' & handler 'addIngredientsHandler', 'removeIngredientsHandler', 'moveDownIngredientsHandler', 'moveUpIngredientsHandler' */}
        <Controller />
      </div>
      <div className={style.burger_display}>
        {/* controller component dengan props state 'ingredients' */}
        <Burger/>
      </div>
    </div>
  )
}

export default BurgerMaker