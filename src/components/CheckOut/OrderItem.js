import React, { useContext } from 'react';
import { OnionContext } from '../../App';
import './CheckOut.css';

const OrderItem = () => {
    const { user, cartItem } = useContext(OnionContext);
    const [loggedInUser, setLoggedInUser] = user;
    const [cart, setCart] = cartItem;

    const subTotal = cart.reduce((sum, cartItem) => sum + cartItem.price * cartItem.quantity, 0);
    const totalQuantity = cart.reduce((sum, cartItem) => sum + cartItem.quantity, 0);
    const tax = 5.00;
    const delivery = 2.00;
    const totalAmount = subTotal + tax + delivery;
    const convertToFixed = (number) => {
        return number.toFixed(2);
    }

    return (
        <div>
            <div className="place-order">
                <ul className="list-group">
                    {
                        cart.map(item => <li className="list-group-item" key={item.id + new Date()}>
                            <div className="row">
                                <div className="col-md-4">
                                    <img className="w-75" src={item.url} alt="" />
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
                                    <p>Subtotal : {totalQuantity} item : </p>
                                    <p>Tax : </p>
                                    <p>Delivery Free : </p>
                                    <h5>Total : </h5>
                                </div>
                                <div className="mar-left">
                                    <p>${convertToFixed(subTotal)}</p>
                                    <p>${convertToFixed(tax)}</p>
                                    <p>${convertToFixed(delivery)}</p>
                                    <h5>${cart.length && convertToFixed(totalAmount)}</h5>
                                </div>
                            </div>
                        </li>
                    }
                    {/* {
                        cart.length ? <li className="list-group-item">
                            <button className="btn btn-danger place-order-button">Place Your Order</button>
                        </li>
                            :
                            <li className="list-group-item">
                                <button className="btn btn-secondary place-order-button-d disabled">Place Your Order</button>
                            </li>
                    } */}
                </ul>

            </div>
        </div>
    );
};

export default OrderItem;