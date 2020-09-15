import React from 'react';
import HeaderImg from '../../images/bannerbackground.png';

const Header = () => {
    return (
        <div className="banner">
            <div className="banner-item">
                <h2 className="banner-title">Best food waiting for your belly</h2>
                <div className="banner-input" >
                    <input type="text" placeholder="Search food items"  />
                    <button className="btn btn-danger">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Header;