import React, { useContext } from 'react';
import { OnionContext } from '../../App';

const CheckOut = () => {
    const { user, cartItem } = useContext(OnionContext);
    const [loggedInUser, setLoggedInUser] = user;
    const [cart, setCart] = cartItem;
    return (
        <div>
            <h1>This is checkout page</h1>
        </div>
    );
};

export default CheckOut;