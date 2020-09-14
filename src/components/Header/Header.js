import React from 'react';
import HeaderImg from '../../images/bannerbackground.png';

const Header = () => {
    return (
        <div>
            <div className="banner">
                <img src={HeaderImg} alt="" />
            </div>
            {/* <div className="banner-input">
                <input type="text" />
                <button className="btn btn-primary">Search</button>      
            </div> */}
        </div>
    );
};

export default Header;