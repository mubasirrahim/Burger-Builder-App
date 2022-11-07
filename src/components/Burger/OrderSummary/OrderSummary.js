import React, {Component} from 'react'
import Auxiliary from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'


class OrderSummary extends Component {
    componentDidUpdate(){
        console.log("[ordersummary]")
    }
    render(){
    const orderlist = Object.keys(this.props.ingredients)
    .map((igkey)=>{
        return <li key={igkey}>
            <span>{igkey}</span>:{this.props.ingredients[igkey]}
        </li>
    })
    return( 
         <Auxiliary>
        <h3>
            Your Order
        </h3>
        <ul>
            {orderlist}
        </ul>
        <p>
            <strong>
                Total price: {this.props.price.toFixed(2)}
            </strong>
        </p>
        <p>
            Continue to Checkout?
        </p>
        <Button clicked={this.props.cancelPurcase} btntype ="Danger">CANCEL</Button>
        <Button clicked={this.props.continuePurcase} btntype= "Success">CONRTINUE </Button>
       </Auxiliary>)
    }
};
export default OrderSummary;