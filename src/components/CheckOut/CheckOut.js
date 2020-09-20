import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { OnionContext } from '../../App';
import './CheckOut.css'
import OrderItem from './OrderItem';

const CheckOut = () => {
    const { user, cartItem } = useContext(OnionContext);
    const [loggedInUser, setLoggedInUser] = user;
    const [cart, setCart] = cartItem;
    const [deliveryAddress, setDeliveryAddress] = useState({ address: '', road: '', floor: '', business: '', instructor: '' });
    const [address, setAddress] = useState('');
    const [road, setRoad] = useState('');
    const [floor, setFloor] = useState('');
    const [business, setBusiness] = useState('');
    const [instructor, setInstructor] = useState('');

    const handleSubmit = (e) => {
        console.log(deliveryAddress);
        setAddress(deliveryAddress.address);
        setRoad(deliveryAddress.road);
        setFloor(deliveryAddress.floor);
        setBusiness(deliveryAddress.business);
        setInstructor(deliveryAddress.instructor);
        e.preventDefault();
    }
    const handleBlur = (e) => {
        const newAddress = { ...deliveryAddress };
        newAddress[e.target.name] = e.target.value;
        setDeliveryAddress(newAddress);
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div>
                    <div className="col-md-6 checkout">
                        <form onSubmit={handleSubmit}>
                            <h5 className="m-3">Edit Delivery Details</h5>
                            <hr className="m-3" />
                            <input name="address" className="form-control m-3" onBlur={handleBlur} type="text" placeholder="Delivery To Door" />
                            <input name="road" className="form-control m-3" onBlur={handleBlur} type="text" placeholder="107 Road no 8" />
                            <input name="floor" className="form-control m-3" onBlur={handleBlur} type="text" placeholder="flat or floor" />
                            <input name="business" className="form-control m-3" onBlur={handleBlur} type="text" placeholder="business name" />
                            <input name="instructor" className="form-control m-3" onBlur={handleBlur} type="text" placeholder="add delivery instructor" />
                            <button type="submit" className="btn btn-danger ml-3 save" >Save & Continue</button>
                        </form>
                    </div>
                </div>
                <div>
                    <div className="col-md-6 mt-5">
                        <OrderItem />
                        <div className="place-btn">
                            {
                                address && road && floor && business && instructor ? <Link to="/deliveryLocation">
                                    <button className="btn btn-danger place-order-button mt-2">Place Your Order</button></Link>
                                    :
                                    <Link to="/deliveryLocation"> <button className="btn btn-secondary place-order-button-d disabled mt-2">Place Your Order</button></Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;