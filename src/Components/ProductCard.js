import { useContext } from 'react';
import CartContext from '../context/cart/CartContext';
import './ProductCard.css';
import Rating from './Rating';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className='ProductCard__wrapper'>
      <div className=''>
        <img src={product.image} className='ProductCard__img' alt='' />
        <h4>{product.name}</h4>
        <div className='ProductCard__price'>
          <h5>$ {product.price}</h5>
        </div>
        <div className="ProductCard__Rating">
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </div>
        <button
          className='ProductCard__button'
          onClick={() => addToCart(product)}
        >Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
