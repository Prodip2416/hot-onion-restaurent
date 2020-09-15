import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import fakeData from '../../fakeDate/fakeData';
import { OnionContext } from '../../App';

const FoodDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    let history = useHistory();
    const { user, cartItem } = useContext(OnionContext);
    const [loggedInUser, setLoggedInUser] = user;
    const [cart, setCart] = cartItem;
    const [cartItemCount, setCartItemCount] = useState(0);

    useEffect(() => {
        const item = fakeData.find(food => food.id === parseInt(id));
        setProduct(item);
    }, [id]);

    const handleAdd = () => {
        const newItem = { ...product };
        newItem.quantity = cartItemCount;
        const totalItem = [newItem, ...cart];
        setCart(totalItem);
        setCartItemCount(0);
        history.push('/');
    }
    const handleChange = () => {
        if (cartItemCount > 0) {
            setCartItemCount(cartItemCount - 1);
        }
    }

    return (
        <div >
            {product ? (
                <section className="">
                    <div className="container single-item mt-3 p-5">
                        <div className="row">
                            <div className="col text-right">
                                <Link to="/Menu"><i className="fas fa-backspace bg-danger rounded-circle text-center" style={{ width: '50px', height: '50px', lineHeight: '50px', color: 'white' }}></i></Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mt-3">
                                <h2>{product.name}</h2>
                                <p className="text-muted mt-3">{product.description}</p>
                                <div className="cart-item d-flex align-items-center mt-5">
                                    <h3>${product && product.price}</h3>
                                    <div className="input-group input-cart-item ml-4">
                                        <button className="btn" onClick={handleChange}>
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <input type="text"
                                            value={cartItemCount}
                                            onChange={handleChange}
                                            className="text-center"
                                            style={{ width: '100px', borderRadius: '30px' }}
                                        />
                                        <button className="btn" onClick={() => setCartItemCount(cartItemCount + 1)}>
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                <button className="btn btn-danger mt-5" onClick={handleAdd} style={{
                                    width: '150px',
                                    borderRadius: '30px'
                                }}>
                                    <i className="fa fa-cart-arrow-down" ></i> Add To Cart</button>
                            </div>
                            <div className="col-md-6 mt-3 text-center">
                                <img src={product && product.url} style={{ width: '75%' }} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            )
                : (
                    <section className="container">
                        <div className="row ">
                            <div className="col not-found-content text-center">
                                <h3 className="alert alert-danger">Opps! Something went wrong</h3>
                                <Link to="/Menu">See our food Item.</Link>
                            </div>
                        </div>
                    </section>
                )
            }
        </div>
    );
};

export default FoodDetail;