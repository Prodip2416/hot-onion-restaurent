import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 p-5">
                        <img className="w-50" src="https://i.ibb.co/r0KDpzF/logo.png" alt="logo" />
                    </div>
                    <div className="col-md-3">
                        <ul className="p-5">
                            <li><a href="/">About Online food</a></li>
                            <li><a href="/">Read Our Blog</a></li>
                            <li><a href="/">Sign up to deliver</a></li>
                            <li><a href="/">Add your restaurant</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="p-5">
                            <li><a href="/">Get help</a></li>
                            <li><a href="/">Red FAQs</a></li>
                            <li><a href="/">View all cities</a></li>
                            <li><a href="/">Restaurant near me</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row copyright">
                    <div className="col-md-6">
                        <p>Copyright © online food</p>
                    </div>
                    <div className="col-md-6">
                        <div className="text-right d-flex">
                            <ul>
                                <li ><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Terms of use</a></li>
                                <li><a href="/">Pricing</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;