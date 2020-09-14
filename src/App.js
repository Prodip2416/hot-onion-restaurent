import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import FoodDetail from './components/FoodDetail/FoodDetail';
import CheckOut from './components/CheckOut/CheckOut';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SignUp from './components/Login/SignUp';
import Navbar from './components/NavBar/Navbar';

export const OnionContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cart, setCart] = useState([]);

  return (
    <OnionContext.Provider value={{ user: [loggedInUser, setLoggedInUser], cartItem: [cart, setCart] }}>
      <Router>
        <h1>Email: {loggedInUser.email}</h1>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Header />
            <Menu />
          </Route>
          <Route path="/Menu">
            <Header />
            <Menu />
          </Route>
          <Route path="/FoodDetail/:id">
            <FoodDetail />
          </Route>
          <PrivateRoute path="/checkout">
            <CheckOut />
          </PrivateRoute>
          <Route path="/login">
            <SignUp />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </OnionContext.Provider>
  );
}

export default App;
