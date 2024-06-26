import { Link } from "react-router-dom";
import { CheckoutForm } from "../CheckoutForm/CheckoutForm"
import './Checkout.scss';
import { useContext, useEffect } from "react";
import { CartContext } from "../../../context/CartContext";
import { useNavigate } from 'react-router-dom';

const Checkout =()=>{
    const {isCartEmpty} = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(()=>{
        isCartEmpty() && navigate('/');
    },[])

    return (
        <div className="check-out">
            <div className='check-out__title-container'>
                <div className='title-content'>
                    <div className='title-content__title'>
                        <Link to="/cart" className="cart-link">Carrito</Link>
                        <span className="separator">&gt;</span>
                        <span className="checkout-text">Checkout</span>
                    </div>
                </div>
            </div>
            <CheckoutForm />
        </div>
    )
}

export {Checkout}