import React from 'react';
import HeaderImg from '../../images/bannerbackground.png';
import Container from '@material-ui/core/Container';



const Header = () => {
    return (
        <div className="banner">
            <Container maxWidth="lg" >
                <img src={HeaderImg} alt=""/>
            </Container>
        </div>
    );
};

export default Header;