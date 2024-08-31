import { ProductsMock } from "../mock/ProductsMock";
import "./Product.css";
import product1 from "../assets/product1.jpeg";

export const Products = () => {
  return (
    <div className="products">
      {ProductsMock.map((product) => (
        <div key={product.id}>
          <img src={product.image} className="product-image" alt="product" />
          <p id="product-color">{product.name}</p>
          <p id="product-color">{product.price}</p>
        </div>
      ))}
    </div>
  );
};
