import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import axios from 'axios';
import Auxiliary from '../../hoc/Auxiliary';
import BuildControls from '../../components/Burger/BuildsControls/BuildsControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
//import axios from '../../axios-orders';
import Spinner from '../../components/UI/spinner/spinner';
import burger from '../../components/Burger/Burger';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};
class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients:null,
        totalPrice: 4,
        purchasable:false,
        purchasing:false,
        loading:false,
      
    }

   componentDidMount(){
        axios.get("https://react-my-burger-3a90e-default-rtdb.firebaseio.com/ingredients.json")
        .then((response)=>
             this.setState({ ingredients : response.data}))

    }


    Updatepurchasable (ingredients){
        
        const sum = Object.keys(ingredients)
        .map((igkey)=>{
            return ingredients[igkey];
        })
        .reduce((sum,el)=>{
            return sum+el;
        },0)
        this.setState({purchasable:sum>0})
    }


    addIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        this.Updatepurchasable(updatedIngredients);
        
    }

    removeIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type];
        if ( oldCount <= 0 ) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        this.Updatepurchasable(updatedIngredients);
       
    }
    
    purchaseHandler =()=>{
        this.setState({purchasing: true})
    }
    cancelPurcaseHandler=()=>{
        this.setState({purchasing:false})
    }
    continuePurcaseHandler=()=>{
       // alert("You continue");
       this.setState({loading:true})
       const order={
        ingredients:this.state.ingredients,
        price:this.state.totalPrice,
        customer:{
            name:"Mubasir Rahim",
            address:{
                street:"F6",
                zioCode:"1600",
                country:"Gilgit Baltistan"
            },
            email:"mubasir@gmail.com"
        },
        deliveryMethod:"fastest"
       }
       console.log(order)
       axios.post("https://react-my-burger-3a90e-default-rtdb.firebaseio.com/orders.json",order)
       .then(response=> this.setState({loading:false,purchasing:false}))
       .catch(error=>this.setState({loading:false,purchasing:false}))
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary=null;
        let burger=<Spinner/>
        if(this.state.ingredients)
        {
            burger=(
                <Auxiliary>
                      <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    order={this.purchaseHandler}
                    disabled={disabledInfo}/>
                </Auxiliary>
            )
            orderSummary= <OrderSummary
            ingredients={this.state.ingredients}
            cancelPurcase={this.cancelPurcaseHandler}
            continuePurcase={this.continuePurcaseHandler}
            price={this.state.totalPrice}  />;
        }
       
       
        if(this.state.loading){
            orderSummary=<Spinner/>
        }

        return (
            <Auxiliary>
                
                <Modal show={this.state.purchasing}
                closemodel={this.cancelPurcaseHandler} >
                    
                    {orderSummary}
                </Modal>
              {burger}
              
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;