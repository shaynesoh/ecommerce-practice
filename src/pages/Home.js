import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
 
import Product from '../components/Product';

const Home = () => {
  // extracts product list from api data in ProductContext.js
  const {products} = useContext(ProductContext);
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  return (
  <div>
    <Link to="/ecommerce-practice">ecommerce</Link>
    <Hero />
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
        {/* displays each filtered products as a singular tile */}
          {filteredProducts.map((product) => {
            return <Product product={product} key={product.id} />
          })}
        </div>
      </div>
    </section>
  </div>
  );
};

export default Home;
