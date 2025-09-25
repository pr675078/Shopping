import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Mainheader from './components/Mainheader';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar count={count} />
      {/* <NavLink to="/">home</NavLink>
      <NavLink to="/cart">cart</NavLink> */}
      <Routes>
        <Route path="/" element={<Mainheader/>} >
        <Route index element={<Home count={count} setCount={setCount}/>} />
        <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
