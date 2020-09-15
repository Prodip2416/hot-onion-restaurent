import React, { useContext } from 'react';
import { OnionContext } from '../../App';
import './CheckOut.css'
import OrderItem from './OrderItem';

const CheckOut = () => {
    const { user, cartItem } = useContext(OnionContext);
    const [loggedInUser, setLoggedInUser] = user;
    const [cart, setCart] = cartItem;

    return (
        <div className="container mt-5">
            <div className="row">
                <div>
                    <div className="col-md-6 checkout">
                        <div>
                            <h5 className="m-3">Edit Delivery Details</h5>
                            <hr className="m-3" />
                            <input name="address" className="form-control m-3" type="text" placeholder="Delivery To Door" />
                            <input name="road" className="form-control m-3" type="text" placeholder="107 Road no 8" />
                            <input name="floor" className="form-control m-3" type="text" placeholder="flat or floor" />
                            <input name="business" className="form-control m-3" type="text" placeholder="business name" />
                            <input name="deliveryInstructor" className="form-control m-3" type="text" placeholder="add delivery instructor" />
                            <button type="submit" className="btn btn-danger ml-3 save" >Save & Continue</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="col-md-6 mt-5">
                        <OrderItem />                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;