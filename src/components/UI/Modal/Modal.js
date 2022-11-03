import React from 'react'
import classes from "./Modal.module.css"
import Auxiliary from '../../../hoc/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'

export default function Modal(props) {
  return (
    <Auxiliary>
        <Backdrop show={props.show} clicked={props.closemodel}/>
       <div className={classes.Modal}
              style={{
              transform: props.show ? "translateY(0)": "translateY(-100vh)",
              opacity :props.show? "1":"0"
                    }}
    >
        {props.children}
    </div>
    </Auxiliary>

  )
}
