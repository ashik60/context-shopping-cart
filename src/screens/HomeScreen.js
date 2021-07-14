import ProductCard from '../Components/ProductCard';
import products from '../data';
import './Homescreen.css';

const HomeScreen = () => {
  return (
    <div className='products__wrapper'>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default HomeScreen;
