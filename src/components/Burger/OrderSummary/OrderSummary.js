import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'

export default function OrderSummary(props) {
    const orderlist = Object.keys(props.ingredients)
    .map((igkey)=>{
        return <li key={igkey}>
            <span>{igkey}</span>:{props.ingredients[igkey]}
        </li>
    })
  return (
   <Auxiliary>
    <h3>
        Your Order
    </h3>
    <ul>
        {orderlist}
    </ul>
    <p>
        Continue to Checkout?
    </p>
    <Button clicked={props.cancelPurcase} btntype ="Danger">CANCEL</Button>
    <Button clicked={props.continuePurcase} btntype= "Success">CONRTINUE </Button>
   </Auxiliary>
  )
}
