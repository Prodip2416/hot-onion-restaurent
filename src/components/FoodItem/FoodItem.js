import React from 'react';
import { Link } from 'react-router-dom';

const FoodItem = (props) => {
    const { id, name, title, price, url } = props.food;
    return (
        <Link to={`/FoodDetail/${id}`}>
            <div className="food-item card m-2" style={{ width: '22rem', float: 'left', height: '450px' }}>
                <div className="card-body">
                    <img className="card-img-top" src={url} alt="Card" />
                    <div className="mt-3">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-subtitle mb-2 text-muted">{title}</p>
                        <h4 className="card-text">Price: ${price}</h4>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default FoodItem;