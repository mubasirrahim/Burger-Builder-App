import React from 'react'
import Logo from '../../Logo/Logo'
import Navigationitems from '../Navigationitems/Navigationitems'
import classes from "./Sidebar.module.css"
import Backdrop from '../../UI/Backdrop/Backdrop'
import Auxiliary from '../../../hoc/Auxiliary'

function Sidebar(props) {
    let attachesClasses=[classes.Sidebar,classes.Close]
    if(props.open){
        attachesClasses=[classes.Sidebar,classes.Open]
    }
  return (
      <Auxiliary>
        <Backdrop show={props.open} clicked={props.closed}/>
         <div className={attachesClasses.join(" ")}>
      
             <div className={classes.Logo}>
                 <Logo />
            </div>
     
             <nav>
          <Navigationitems/>
              </nav>
         </div>
      </Auxiliary>
   
  )
}

export default Sidebar