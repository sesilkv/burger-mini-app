import React, {useContext} from 'react'
import BurgerContext from '../../Context/BurgerContext'

import Bun from './Bun'
import Patty from './Patty'
import Cheese from './Cheese'
import Lettuce from './Lettuce'
import Tomato from './Tomato'

import style from './burger.module.css'

const Burger = () => { //arrow function
  // const [ingredients, setIngredients] = useState([])
  
  // const addIngredientsHandler = (ingredients) => {
  //   setIngredients( prevState => {
  //     const newIngredients = [ingredients,...prevState]
  //     console.log(newIngredients)
  //     return newIngredients
  //   })
  // }
  
  // array kosong
  //const ingredients = ['patty','lettuce','bun','cheese', 'patty' ,'tomato', 'cheese', 'bun', 'lettuce', 'patty']
  const ctx = useContext(BurgerContext)
  console.log(ctx)
  
  return (
    <div className={style.burger}>
        <Bun type="top"/>
        {ctx.ingredients.map( (item, index) => {
          switch (item) {
            case 'patty':
              return <Patty key={index}/>
            case 'lettuce':
              return <Lettuce key={index}/>
            case 'bun':
              return <Bun type="insert" key={index}/>
            case 'cheese':
              return <Cheese key={index}/>
            case 'tomato':
              return <Tomato key={index}/>
            default:
              return null
          }
        })}
        <Bun />
        {/* <button onClick={() => addIngredientsHandler('patty')}>Add Patty</button>
        <button onClick={() => addIngredientsHandler('lettuce')}>Add Lettuce</button>
        <button onClick={() => addIngredientsHandler('bun')}>Add Bun</button>
        <button onClick={() => addIngredientsHandler('cheese')}>Add Cheese</button>
        <button onClick={() => addIngredientsHandler('tomato')}>Add Tomato</button> */}
    </div>
  )
}

export default Burger;