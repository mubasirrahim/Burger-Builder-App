import React from 'react'
import classes from "./Navigationitems.module.css"
import Navigationitem from './Navigationitem/Navigationitem'

function Navigationitems() {
  return (
    <ul className={classes.NavigationItems}>
       <Navigationitem link="/" active>
        BurgerBuilder
       </Navigationitem>
       <Navigationitem link="/">
        Checkout
       </Navigationitem >
    </ul>
  )
}

export default Navigationitems