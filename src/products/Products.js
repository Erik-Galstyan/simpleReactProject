// import { ProductsMock } from "../mock/ProductsMock";
import { useSelector } from "react-redux";
import "./Product.css";

export const Products = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} className="product-image" alt="product" />
          <p id="product-color">{product.name}</p>
          <p id="product-color">{product.price}</p>
        </div>
      ))}
    </div>
  );
};
