import React from 'react'

const Cart = () => {
  function hello(){
    console.log('hello');
  }
  return (
    <>
      <div style={{ marginTop: '50px', textAlign: 'center' }}>
        <h1>Your Shopping Cart</h1>
        <p>This is the cart page content.</p>
        <button onClick={hello}>Click me</button>
      </div>
    </>
  )
}

export default Cart
