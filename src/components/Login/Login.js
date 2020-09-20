import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { OnionContext } from '../../App';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const { user } = useContext(OnionContext);
    const [loggedInUser, setLoggedInUser] = user;
    const [isUser, setIsUser] = useState(true);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [newUser, setNewUser] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    
    const handleSubmit = (e) => {
        if (!isUser && newUser.email && newUser.password && newUser.confirmPassword) {
            if (password === confirmPassword) {
                firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
                    .then(res => {
                        // console.log(res);
                        userInfoUpdate(newUser.name);
                        newUser.displayName = newUser.name;
                        setLoggedInUser(newUser);
                        // history.push('/checkout');
                        history.replace(from);
                    })
                    .catch(function (error) {
                        setError(error.message);
                    });
            } else {
                setError('Password & Confirm Password does not match');
            }
        } else if (isUser && newUser.email && newUser.password) {
            firebase.auth().signInWithEmailAndPassword(newUser.email, newUser.password)
                .then(res => {
                    setLoggedInUser(res.user);
                    history.replace(from);
                })
                .catch(function (error) {
                    setError(error.message);
                });
        }
        e.preventDefault();
    }

    const userInfoUpdate = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        }).then(function () {
            //console.log('user name Update successful');
        }).catch(function (error) {
            console.log(error);
        });
    }

    const handleBlur = (e) => {
        let isValidForm = true;
        if (e.target.name === 'email') {
            isValidForm = /\S+@\S+\.\S+/.test(e.target.value);
            if (isValidForm) {
                setError('');
            } else {
                setError('Please provide a valid email address');
            }
        }
        if (e.target.name === 'password') {
            const greaterThanFive = e.target.value.length > 4;
            const mustOneDigit = /\d{1}/.test(e.target.value);
            isValidForm = greaterThanFive && mustOneDigit;
            setPassword(e.target.value);
            if (isValidForm) {
                setError('');
            } else {
                setError('Password have at least one digit with five character long.');
            }
        }
        if(e.target.name === 'confirmPassword') {    
            console.log(e.target.name); 
            setConfirmPassword(e.target.value);
            if (password === confirmPassword) {
                isValidForm = true;
                setError('');
            } else {
                isValidForm = false;
                setError('Password & Confirm Password does not match');
            }
        }

        if (isValidForm) {
            const user = { ...newUser };
            user[e.target.name] = e.target.value;
            setNewUser(user);
        } 
    }
    const handleAccount = () => {
        setIsUser(false);
    }
    return (
        <div className="sign-up-img">
            <div className="row">
                <div className="col-md-4 col-md-offset-3 m-auto">
                    <div className="mt-5 text-center mb-5">
                        <img className="w-50" src="https://i.ibb.co/p4sb5x5/logo2.png" alt="" />
                    </div>
                    {
                        isUser ? <form className="mt-3 login-form" onSubmit={handleSubmit} >
                            {error && <p className="alert alert-danger m-3">{error}</p>}
                            <input name="email" onBlur={handleBlur} className="form-control m-3" required type="email" placeholder="Email" />
                            <input name="password" onBlur={handleBlur} className="form-control m-3" required type="password" placeholder="Password" />
                            <button type="submit" className="btn login-btn form-control m-3" >Log In</button>
                        </form>
                            : <form className="mt-3 login-form" onSubmit={handleSubmit} >
                                {error && <p className="alert alert-danger m-3">{error}</p>}
                                <input name="name" onBlur={handleBlur} className="form-control m-3" required type="name" placeholder="Name" />
                                <input name="email" onBlur={handleBlur} className="form-control m-3" required type="email" placeholder="Email" />
                                <input name="password" onBlur={handleBlur} className="form-control m-3" required type="password" placeholder="Password" />
                                <input name="confirmPassword" onBlur={handleBlur} onChange={handleBlur} className="form-control m-3" required type="password" placeholder="Confirm Password" />
                                <button type="submit" className="btn login-btn form-control ml-3" >Sign Up</button>
                            </form>
                    }
                    {
                        isUser ? <p className="text-center mt-2 text-danger" onClick={handleAccount} style={{ cursor: 'pointer' }}>Don't have an account? Sign up</p>
                            : <p className="text-center mt-2 text-danger" onClick={() => setIsUser(true)} style={{ cursor: 'pointer' }}>Already have an account?</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;