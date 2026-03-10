import React from 'react'
import { useCart } from '../context/CartContext.jsx'
import './Cart.css'

export default function Cart() {
  const { cartItems, removeFromCart, updateQty, total, count, cartOpen, setCartOpen, clearCart } = useCart()

  const handleCheckout = () => {
    alert(`🎂 Order placed! Total: $${total.toFixed(2)}\nWe'll contact you shortly to confirm your order.`)
    clearCart()
    setCartOpen(false)
  }

  return (
    <>
      {cartOpen && <div className="cart-backdrop" onClick={() => setCartOpen(false)} />}
      <div className={`cart-drawer ${cartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3>Your Order</h3>
          <button className="cart-close" onClick={() => setCartOpen(false)}>✕</button>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <span>🎂</span>
            <p>Your cart is empty</p>
            <small>Add some delicious cakes!</small>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.cake.image} alt={item.cake.name} />
                  <div className="cart-item-info">
                    <h4>{item.cake.name}</h4>
                    <p>{item.weight.label}</p>
                    <span>${item.weight.price.toFixed(2)}</span>
                  </div>
                  <div className="cart-item-controls">
                    <button onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>✕</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total ({count} items)</span>
                <strong>${total.toFixed(2)}</strong>
              </div>
              <button className="btn btn-primary checkout-btn" onClick={handleCheckout}>
                Place Order →
              </button>
              <button className="btn btn-outline clear-btn" onClick={clearCart}>Clear Cart</button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
