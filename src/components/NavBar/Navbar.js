import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OnionContext } from '../../App';

const Navbar = () => {
    const { user } = useContext(OnionContext);
    const [loggedInUser, setLoggedInUser] = user;
    const handleLogout = () => {
        setLoggedInUser({});
    }
    return (
        <div className="container mt-1 p-1">
            <div className="row">
                <div className='col-md-8'>
                    <Link to="/">
                        <img className="w-25" src="https://i.ibb.co/p4sb5x5/logo2.png" alt="logo" />
                    </Link>
                </div>
                <div className="col-md-4">
                    <button className="btn mr-3">
                        <i className="fa fa-cart-plus" aria-hidden="true">
                        </i> <span style={{ color: 'red' }}></span>
                    </button>
                    {
                        loggedInUser.email ? <button className="btn btn-link ml-3" onClick={handleLogout} style={{ textDecoration: 'none', color: 'black' }}>
                            {loggedInUser.displayName}[Logout]</button>
                            : <Link to="/login" > <button className="btn btn-link ml-3" style={{ textDecoration: 'none', color: 'black' }}>Login</button> </Link>
                    }
                    { 
                        loggedInUser.email ? ''
                            : <Link to="/signup">
                                <button className="btn btn-danger my-2 ml-3" style={{ borderRadius: '30px', width: '120px' }}>SignUp</button>
                            </Link>
                    }
                   
                </div>
            </div>
        </div>

    );
};

export default Navbar;