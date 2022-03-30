import React from 'react'
import Bun from './Bun'
import Patty from './Patty'
import Cheese from './Cheese'
import Lettuce from './Lettuce'
import Tomato from './Tomato'

const Burger = () => { //arrow function
  return (
    <React.Fragment>
        <Bun />
        <Patty />
        <Lettuce />
        <Cheese />
        <Tomato />
        <Bun />
    </React.Fragment>
  )
}

export default Burger;