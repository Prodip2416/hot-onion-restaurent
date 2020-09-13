import React from 'react';
import HeaderImg from '../../images/bannerbackground.png';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const Header = () => {
    return (
        <div className="banner">
            <Container maxWidth="lg">
               <Box>
                    <img src={HeaderImg} style={{}} alt=""/>
               </Box>
            </Container>  
        </div>
    );
};

export default Header;