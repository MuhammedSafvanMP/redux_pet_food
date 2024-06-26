import React, { createContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const globalContext = createContext();



export const GlobalProvider = ({ children }) => {
  const [login, setLogin] = useState(null)
  const [user, setUser] = useState([]);
  const [dashbord, setDashBord] = useState(true);
  const Navigate = useNavigate()

  const products = useSelector((state) => state.products);

 
  const handleLike = (id) => {
    const data = products.find((data) => data.id  === id)
    let alreadyExists = false;
  
    for (let item of login.likeItems) {
      if (item.id === data.id) {
        alreadyExists = true;
        break;
      }
    }
  
    if (!alreadyExists) {
      login.likeItems.push({ ...data, amount: 1 });
    }
  
  }
  
  const handleAdd = (id) => {
    const data = products.find((item) => item.id === id);
    let alreadyExists = false;
  
    for (let item of login.cartItems) {
      if (item.id === data.id) {
        alreadyExists = true;
        break;
      }
    }
  
    if (!alreadyExists) {
      login.cartItems.push({ ...data, amount: 1 });
    }
  
  };
  
  
  
  
  

  const handleSignup = (e) => {
    e.preventDefault();

    if (!/^[a-zA-Z]+([ ]?[a-zA-Z]+)*$/.test(e.target.name.value)) {
      alert('Please type a correct full name');
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.email.value)) {
      alert('Your email is wrong');
      return;
    } else if (e.target.password.value.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }

    let name = e.target.name.value;
    let email = e.target.email.value;
    let password = e.target.password.value;

    const userName = { name, email,  password, likeItems: [], cartItems: []}

    setUser([...user, userName ])

    const existingUser = user.email === email;

    if (existingUser) {
      alert('User already exists');
      Navigate('/login');
    }

    Navigate('/login');
  };


  return (
    <globalContext.Provider value={[handleAdd, handleLike, login, setLogin, handleSignup,user,dashbord, setDashBord]}>
      {children}
    </globalContext.Provider>
  );
};

