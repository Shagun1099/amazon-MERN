import React from 'react'
import './Order.css'
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from './reducer';
import {db} from './firebase';
import { useStateValue } from "./StateProvider";

function Order({ order }) {
	
	const [{ user }, dispatch] = useStateValue();
	
	const deleteOrder = () => {
	
	 if(user){
	   db.collection("users")
		  .doc(user?.uid)
          .collection('orders')
		  .doc(order.id)
		  .delete()
		  .then()
		  .catch(error=> alert(error.message))
	 }else{
	   alert("You need to be logged in to do that");
	}
    }
	
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order_id">
                <small><strong>Your Order Id:-</strong>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order_total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={getBasketTotal(order.data.basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />  
			<button onClick={deleteOrder}>Delete Your Order</button>
        </div>
    )
}

export default Order