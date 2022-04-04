import React, {useContext} from 'react'
import BurgerContext from '../../Context/BurgerContext'

import AddButton from './AddButton'
import MapItem from './MapItem'
import style from './controller.module.css'

const Controller = () => {
  const ctx = useContext(BurgerContext)

  return (
    <>
    <div className={style.ingredients_selector}>
        <h5>Add Ingredients</h5>
        <div>
            <AddButton label="Patty" clickHandler={() => ctx.addIngredientsHandler('patty')} />
            <AddButton label="Lettuce" clickHandler={() => ctx.addIngredientsHandler('lettuce')} />
            <AddButton label="Tomato" clickHandler={() => ctx.addIngredientsHandler('tomato')} />
            <AddButton label="Cheese" clickHandler={() => ctx.addIngredientsHandler('cheese')} />
            <AddButton label="Bun" clickHandler={() => ctx.addIngredientsHandler('bun')} />
        </div>
    </div>
    <div>
      {/* loop utk membuat list ingredient sesuai urutan array */}
      {ctx.ingredients.map((item, index) => {
        return (
          <> 
          {/* render MapItem untuk tiap item dari 'ingredients' */}
            <MapItem
              label={item}
              key={index}
              removeHandler={() => ctx.removeIngredientsHandler(index)}
              upHandler={() => ctx.moveUpIngredientsHandler(index)}
              downHandler={() => ctx.moveDownIngredientsHandler(index)}
              firstItem={index === 0}
              lastItem={index === ctx.ingredients.length - 1}
            />
          </>
        )
      })}
    </div>
    </>
  )
}

export default Controller