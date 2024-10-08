//import { DUMMY_PRODUCTS } from '../dummy-products.js';
//import Product from './Product.jsx';

export default function Shop({ children }) {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>
      {/*DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={onAddItemToCart} />
          </li>
        ))*/}
      <ul id="products">
      {children}
      </ul>
    </section>
  );
}
