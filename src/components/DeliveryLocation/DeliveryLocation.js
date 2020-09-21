import React, { useContext } from 'react';
import './DeliveryLocation.css';
import { OnionContext } from '../../App';

const DeliveryLocation = () => {
    const { user } = useContext(OnionContext);
    const [loggedInUser, setLoggedInUser] = user;
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 mt-5">
                    <div className="mt-5">
                        <img src="https://i.ibb.co/yQk3PPX/Capture.png" className="img img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-md-4 mt-5">
                    <div className="mt-5 place">
                        <div className="ml-5 mb-4">
                            <img src="https://i.ibb.co/yqzvxWp/Group-1151.png" className="w-25 mt-4" alt="" />
                        </div>
                        <div className="ml-4">
                            <div className="location">
                                <p className="mt-3">Your Location</p>
                                <small className="">107 No, Road 8.</small>
                            </div>
                            <h1 className="ml-1">09:30</h1>
                            <small className="ml-1">estimated delivery time</small>
                        </div>
                        <div className="ml-4 mb-4">
                            <div className="location">
                                <p className="mt-3">Hello, Mr/Mrs <b>{loggedInUser && loggedInUser.displayName}</b></p>
                            </div>
                            <button className="btn btn-danger mt-2 mb-2 contact">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryLocation;