import React, { useContext, useEffect, useState } from 'react';
import { OnionContext } from '../../App';
import './CheckOut.css';

const OrderItem = () => {
    const { user, cartItem } = useContext(OnionContext);
    const [loggedInUser, setLoggedInUser] = user;
    const [cart, setCart] = cartItem;

    // const [subTotal, setSubTotal] = useState(0);
    // const [totalQuantity, setTotalQuantity] = useState(0);
    // const [tax, setTax] = useState(2.5);
    // const [delivery, setDelivery] = useState(5.00);
    // const [totalAmount, setTotalAmount] = useState(0);

    // useEffect(() => {
    //     const getSubTotal = cart.reduce((sum, cartItem) => sum + cartItem.price * cartItem.quantity, 0);
    //     setSubTotal(getSubTotal);
    //     const getTotalQuantity = cart.reduce((sum, cartItem) => sum + cartItem.quantity, 0);
    //     setTotalQuantity(getTotalQuantity);
    //     const getTotalAmount = subTotal + tax + delivery;
    //     setTotalAmount(getTotalAmount);
    // }, [cart, subTotal, delivery, tax])

    const convertToFixed = (number) => {
        return number.toFixed(2);
    }

    const subTotal = cart.reduce((sum, cartItem) => sum + cartItem.price * cartItem.quantity, 0);
    const totalQuantity = cart.reduce((sum, cartItem) => sum + cartItem.quantity, 0);
    const tax = 2.5;
    const delivery = 5.00;
    const totalAmount = subTotal + tax + delivery;

    return (
        <div>
            <div className="place-order">
                <ul className="list-group">
                    {
                        cart.map(item => <li className="list-group-item" key={item.id + Math.random()}>
                            <div className="row">
                                <div className="col-md-4 mt-3">
                                    <img className="w-75 img img-responsive" src={item.url} alt="" />
                                </div>
                                <div className="col-md-8">
                                    <p>{item.name}</p>
                                    <h3 className="text-danger">${item.price}</h3>
                                    <p><small>Quantity : {item.quantity}</small></p>
                                </div>
                            </div>
                        </li>)
                    }
                    {
                        <li className="list-group-item">
                            <div className="d-flex">
                                <div className="">
                                    <p>Subtotal : <b>{cart.length && totalQuantity}</b> item : </p>
                                    <p>Tax : </p>
                                    <p>Delivery Free : </p>
                                    <h5>Total : </h5>
                                </div>
                                <div className="mar-left">
                                    <p>${cart.length && convertToFixed(subTotal)}</p>
                                    <p>${cart.length && convertToFixed(tax)}</p>
                                    <p>${cart.length && convertToFixed(delivery)}</p>
                                    <h5>${cart.length && convertToFixed(totalAmount)}</h5>
                                </div>
                            </div>
                        </li>
                    }
                </ul>

            </div>
        </div>
    );
};

export default OrderItem;