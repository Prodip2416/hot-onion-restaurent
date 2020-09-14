import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeDate/fakeData';
import FoodItem from '../FoodItem/FoodItem';
import { OnionContext } from '../../App';
import WhyChoose from '../WhyChoose/WhyChoose';


const Menu = () => {
    const [category, setCategory] = useState('LUNCH');
    const [selectedItem, setSelectedItem] = useState([]);
    const { user, cartItem } = useContext(OnionContext);
    const [loggedInUser, setLoggedInUser] = user;
    const [cart, setCart] = cartItem;

    useEffect(() => {
        const totalItem = fakeData.filter(item => item.category === category);
        setSelectedItem(totalItem);
    }, [category])

    return (
        <div className="container text-center mt-5">
            <nav>
                <button className="btn btn-link mr-3" onClick={() => setCategory('BREAKFAST')}>Breakfast</button>
                <button className="btn btn-link mr-3" onClick={() => setCategory('LUNCH')}>Lunch</button>
                <button className="btn btn-link mr-3" onClick={() => setCategory('DINNER')}>Dinner</button>
            </nav>
            <div className="mt-4">
                {
                    selectedItem.map(item => <FoodItem key={item.id} food={item} />)
                }
            </div>
            <div className="">
                {
                    cart.length ? <Link to="/checkout"> <button className="btn btn-danger mt-4">Checkout Your Food</button></Link>
                        : <button className="btn btn-secondary mt-4" disabled>Checkout Your Food</button>
                }
            </div>           
            <WhyChoose/>
        </div>
    );
};

export default Menu;