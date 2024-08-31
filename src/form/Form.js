import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/productsSlice";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    imageUrl: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addProduct({
        name: formData.productName,
        price: `$ ${formData.price}`,
        image: formData.imageUrl,
        id: `id${Math.random()}`,
      })
    );

    setFormData({ productName: "", price: "", imageUrl: "" });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label id="label-color" htmlFor="productName">
          Product Name
        </label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
        />

        <label id="label-color" htmlFor="price">
          Price
        </label>
        <input
          type="text"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />

        <label id="label-color" htmlFor="imageUrl">
          Image URL
        </label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
