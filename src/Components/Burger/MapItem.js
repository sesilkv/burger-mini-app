import React from 'react'
// install icon dengan install dengan package npm i react-icons
import {BiMinusCircle, BiChevronDownCircle, BiChevronUpCircle} from 'react-icons/bi'

import style from './controller.module.css'

const MapItem = (props) => {
  return (
    <div className={style.map_item}>
        <h6>{props.label}</h6>
        <div className={style.map_controller}>
            {/* untuk button hapus ingredients */}
            <BiMinusCircle onClick={props.removeHandler} className={style.remove_button}/>
            {/* button menaikkan ingredients, tampil bila props.firstItem = false */}
            {!props.firstItem && <BiChevronUpCircle onClick={props.upHandler} className={style.order_button} />}
            {/* button menurunkan ingredients, tampil bila props.lastItem = false */}
            {!props.lastItem && <BiChevronDownCircle onClick={props.downHandler} className={style.order_button} />}
        </div>
    </div>
  )
}

export default MapItem