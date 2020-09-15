import React from 'react';
import BargerMan from '../../images/Image/bargerMan.png';
import shap from '../../images/Image/shap.png';
import supplier from '../../images/Image/supplier.png';

import Group2 from '../../images/ICON/Group 245.png';
import Group3 from '../../images/ICON/Group 1133.png';
import Group1 from '../../images/ICON/Group 204.png';

const WhyChoose = () => {
    return (
        <section className="mt-5">
            <div className="text-left mb-5">
                <h2 className="mb-3">Why you choose us</h2>
                <p className="card-text" style={{ lineHeight: '5px' }}><small >Barton waited twenty always repair in within we do. An delighted offering crusty</small></p>
                <p className="card-text" style={{ lineHeight: '5px' }}><small >mu is dagwood's at. Boy prosperous increasing surround</small></p>
            </div>
            <div className="card-group">
                <div className="card m-3">
                    <img className="card-img-top" src={BargerMan} alt="Card" />
                    <div className="card-body">
                        <div className="d-flex">
                            <div>
                                <img src={Group2} alt="" />
                            </div>
                            <div>
                                <h5 className="card-title text-left m-2">Fast Delivery</h5>
                                <p className="card-text text-left"><small>Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future</small></p>
                                <h6 className="text-left">See more <i className="fas fa-arrow-right"></i> </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card m-3">
                    <img className="card-img-top" src={shap} alt="Card" />
                    <div className="card-body">
                        <div className="d-flex">
                            <div> <img src={Group3} alt="" /></div>
                            <div>
                                <h5 className="card-title text-left m-2">A Good Auto Responder</h5>
                                <p className="card-text text-left"><small>Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future</small></p>
                                <h6 className="text-left">See more <i className="fas fa-arrow-right"></i> </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card m-3">
                    <img className="card-img-top" src={supplier} alt="Card" />
                    <div className="card-body">

                        <div className="d-flex">
                            <div><img src={Group1} alt="" /></div>
                            <div>
                                <h5 className="card-title text-left m-2">Home Delivery</h5>
                                <p className="card-text text-left"><small>Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future</small></p>
                                <h6 className="text-left">See more <i className="fas fa-arrow-right"></i> </h6>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;