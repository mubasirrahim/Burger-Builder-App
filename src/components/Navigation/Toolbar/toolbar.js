import React from 'react'
import classes from "./Toolbar.module.css"
import Logo from '../../Logo/Logo'
import Navigationitems from '../Navigationitems/Navigationitems'
function toolbar(props) {
  return (
    <header className={classes.Toolbar}>
        <div onClick={props.clicked}>Menu</div>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
        <Navigationitems/>
        </nav>
       
        
    </header>
  )
}

export default toolbar