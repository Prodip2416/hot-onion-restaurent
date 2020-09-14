import React, { useContext} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { OnionContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, cartItem } = useContext(OnionContext);
    const [loggedInUser, setLoggedInUser] = user;
    const [cart, setCart] = cartItem;
    return (
        <Route  
            {...rest}
            render={({ location }) =>
                loggedInUser.email ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;