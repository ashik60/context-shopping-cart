import { useContext } from 'react';
import CartContext from '../context/cart/CartContext';
import './Nav.css';

const Nav = () => {
  const { cartItems, showHideCart } = useContext(CartContext);
  return (
    <nav>
      <div className='nav__left'>
        <h4>Online Store</h4>
      </div>
      <div className='nav__middle'>
        <div className='input__wrapper'>
          <input type='text' />
          <i className='fas fa-search' />
        </div>
      </div>
      <div className='nav__right'>
        <div className='cart__icon'>
          <i className='fa fa-shopping-cart' onClick={showHideCart} aria-hidden='true' />
          {cartItems.length > 0 && (
            <div className='item__count'>
              <span>{cartItems.length}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
